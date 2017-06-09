const FoundrybotError = require('./foundrybotError');
const DomainCrawlResource = require('./resources/domainCrawl/domainCrawlResource');

class FoundrybotClient {

  /**
   * @param {String|Object} options
   */
  constructor (options) {

    if (!options) {
      throw new FoundrybotError({
        message: 'Missing required parameter "secretKey".',
        type: 'FoundrybotAuthenticationError'
      });
    } else if (typeof options === 'string') {
      this._secretKey = options;
    } else if (!options.secretKey) {
      throw new FoundrybotError({
        message: 'Missing required parameter "secretKey".',
        type: 'FoundrybotAuthenticationError'
      });
    } else {
      this._publicKey = options.publicKey;
      this._secretKey = options.secretKey;
    }

    this.domainCrawl = new DomainCrawlResource(options);
  }
}

module.exports = FoundrybotClient;