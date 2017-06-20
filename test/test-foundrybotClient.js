const expect = require('chai').expect;

const FoundrybotClient = require('../dist/foundrybotClient').FoundrybotClient;

describe('FoundrybotClient', () => {

  describe('module', () => {

    it('should have a static create method', () => {
      expect(FoundrybotClient.create).to.be.a('function');
    });

    it('should have a constructor method', () => {
      expect(FoundrybotClient.constructor).to.be.a('function');
    });

  });

  describe('create', () => {

    it('should throw an error if called without a secretKey', () => {
      try {
        const foundrybot = FoundrybotClient.create();
      } catch (err) {
        expect(err).to.exist;
        expect(err.message).to.equal('Missing required parameter "secretKey".');
        expect(err.type).to.equal('authentication_error');
      }
    });

    it('should create', () => {
      const testKey = '443d3f68-88a9-4a3a-adff-d1f0efbc01dc';
      const foundrybot = FoundrybotClient.create(testKey);
      expect(foundrybot).to.exist;
      expect(foundrybot.domainCrawl).to.be.an('object');
      expect(foundrybot.event).to.be.an('object');
      expect(foundrybot.org).to.be.an('object');
      expect(foundrybot.urlSnapshot).to.be.an('object');
      expect(foundrybot.urlSnapshotContent).to.be.an('object');
      expect(foundrybot.urlSnapshotLink).to.be.an('object');
      expect(foundrybot.urlSnapshotMedia).to.be.an('object');
      expect(foundrybot.urlSnapshotTag).to.be.an('object');
      expect(foundrybot.webhookSetting).to.be.an('object');
    })


  });

  describe('constructor', () => {

    it('should throw an error if instantiated without a secretKey', () => {
      try {
        const foundrybot = new FoundrybotClient();
      } catch (err) {
        expect(err).to.exist;
        expect(err.message).to.equal('Missing required parameter "secretKey".');
        expect(err.type).to.equal('authentication_error');
      }
    });

    it('should instantiate', () => {
      const testKey = '443d3f68-88a9-4a3a-adff-d1f0efbc01dc';
      const foundrybot = new FoundrybotClient(testKey);
      expect(foundrybot).to.exist;
      expect(foundrybot.domainCrawl).to.be.an('object');
      expect(foundrybot.event).to.be.an('object');
      expect(foundrybot.org).to.be.an('object');
      expect(foundrybot.urlSnapshot).to.be.an('object');
      expect(foundrybot.urlSnapshotContent).to.be.an('object');
      expect(foundrybot.urlSnapshotLink).to.be.an('object');
      expect(foundrybot.urlSnapshotMedia).to.be.an('object');
      expect(foundrybot.urlSnapshotTag).to.be.an('object');
      expect(foundrybot.webhookSetting).to.be.an('object');
    })


  });

});