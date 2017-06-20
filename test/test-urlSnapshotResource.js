const testUtil = require('./helpers/util');
const expect = require('chai').expect;
const sinon = require('sinon');
const Resource = require('../dist/resources/urlSnapshot/urlSnapshotResource').UrlSnapshotResource;

describe('UrlSnapshotResource', () => {

  describe('module', () => {
    it('should have a constructor method', () => {
      expect(Resource.constructor).to.be.a('function');
    });
  });

  describe('constructor', () => {

    it('should throw an error if instantiated without a secretKey', () => {
      try {
        const resource = new Resource();
      } catch (err) {
        expect(err).to.exist;
        expect(err.message).to.equal('Missing required parameter "secretKey".');
        expect(err.type).to.equal('authentication_error');
      }
    });

    it('should instantiate', () => {
      const resource = new Resource(testUtil.getTestKey());
      expect(resource).to.exist;
      expect(resource.makeRequest).to.be.a('function');
      expect(resource.buildHeaders).to.be.a('function');
      expect(resource.buildUrl).to.be.a('function');

      expect(resource.resourceName).to.equal('UrlSnapshot');
      expect(resource.get).to.be.a('function');
      expect(resource.search).to.be.a('function');
    });

  });

  describe('get', () => {

    it('should build a correct request', () => {
      const resource = new Resource(testUtil.getTestKey());
      const stub = sinon.stub(resource, 'makeRequest');
      stub.withArgs({
        method: 'GET',
        params: { id: 1 },
        url: '/url-snapshots/{id}'
      }).resolves({ doc: true });
      stub.throws('Invalid args');
      return resource.get(1)
      .then((result) => {
        expect(result).to.be.true;
      });
    });
  });

  describe('search', () => {
    const resource = new Resource(testUtil.getTestKey());
    const stub = sinon.stub(resource, 'makeRequest');
    stub.withArgs({
      method: 'GET',
      query: { domainHostname: 'foundry.ai' },
      url: '/url-snapshots'
    }).resolves(true);
    stub.throws('Invalid args');

    return resource.search({ domainHostname: 'foundry.ai' })
    .then((result) => {
      expect(result).to.be.true;
    });
  });

});