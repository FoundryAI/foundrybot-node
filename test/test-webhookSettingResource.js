const testUtil = require('./helpers/util');
const expect = require('chai').expect;
const sinon = require('sinon');
const Resource = require('../dist/resources/webhookSetting/webhookSettingResource').WebhookSettingResource;

describe('WebhookSettingResource', () => {

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

      expect(resource.resourceName).to.equal('WebhookSetting');
      expect(resource.subscribe).to.be.a('function');
      expect(resource.unsubscribe).to.be.a('function');
    });

  });

  describe('subscribe', () => {

    it('should build a correct request', () => {
      const resource = new Resource(testUtil.getTestKey());
      const stub = sinon.stub(resource, 'makeRequest');
      stub.withArgs({
        method: 'POST',
        data: { type: 'org.updated', urlEndpoint: 'http://example.com/webhooks' },
        url: '/webhook-settings/subscribe'
      }).resolves({ doc: true });
      stub.throws('Invalid args');
      return resource.subscribe({ type: 'org.updated', urlEndpoint: 'http://example.com/webhooks' })
      .then((result) => {
        expect(result).to.be.true;
      });
    });
  });

  describe('unsubscribe', () => {
    const resource = new Resource(testUtil.getTestKey());
    const stub = sinon.stub(resource, 'makeRequest');
    stub.withArgs({
      method: 'POST',
      data: { type: 'org.updated' },
      url: '/webhook-settings/unsubscribe'
    }).resolves({ doc: true });
    stub.throws('Invalid args');

    return resource.unsubscribe({ type: 'org.updated' })
    .then((result) => {
      expect(result).to.be.true;
    });
  });

});