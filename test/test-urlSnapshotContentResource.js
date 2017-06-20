const testUtil = require('./helpers/util');
const expect = require('chai').expect;
const sinon = require('sinon');
const Resource = require('../dist/resources/urlSnapshotContent/urlSnapshotContentResource').UrlSnapshotContentResource;

describe('UrlSnapshotContentResource', () => {

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

      expect(resource.resourceName).to.equal('UrlSnapshotContent');
      expect(resource.search).to.be.a('function');
    });

  });

  describe('search', () => {
    const resource = new Resource(testUtil.getTestKey());
    const stub = sinon.stub(resource, 'makeRequest');
    stub.withArgs({
      method: 'GET',
      query: { domainCrawlId: 1 },
      url: '/url-snapshot-contents'
    }).resolves(true);
    stub.throws('Invalid args');

    return resource.search({ domainCrawlId: 1 })
    .then((result) => {
      expect(result).to.be.true;
    });
  });

});