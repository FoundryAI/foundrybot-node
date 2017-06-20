const testUtil = require('./helpers/util');
const expect = require('chai').expect;
const sinon = require('sinon');
const Resource = require('../dist/resources/domainCrawl/domainCrawlResource').DomainCrawlResource;

describe('DomainCrawlResource', () => {

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

      expect(resource.resourceName).to.equal('DomainCrawl');
      expect(resource.get).to.be.a('function');
      expect(resource.search).to.be.a('function');
      expect(resource.create).to.be.a('function');
    });

  });

  describe('get', () => {

    it('should build a correct request', () => {
      const resource = new Resource(testUtil.getTestKey());
      const stub = sinon.stub(resource, 'makeRequest');
      stub.withArgs({
        method: 'GET',
        params: { id: 1 },
        url: '/domain-crawls/{id}'
      }).resolves(true);
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
      query: { url: 'http://example.com' },
      url: '/domain-crawls'
    }).resolves(true);
    stub.throws('Invalid args');

    return resource.search({ url: 'http://example.com' })
    .then((result) => {
      expect(result).to.be.true;
    });
  });

  describe('create', () => {
    const resource = new Resource(testUtil.getTestKey());
    const stub = sinon.stub(resource, 'makeRequest');
    stub.withArgs({
      method: 'POST',
      data: { url: 'http://example.com' },
      url: '/domain-crawls'
    }).resolves(true);
    stub.throws('Invalid args');

    return resource.create({ url: 'http://example.com' })
    .then((result) => {
      expect(result).to.be.true;
    });
  });

});