const FoundrybotError = require('./foundrybotError');
const DomainCrawlResource = require('./resources/domainCrawl/domainCrawlResource');

class FoundrybotClient {

  /**
   * @param {String|Object} options
   */
  constructor (options) {

    this._secretKey = _.get(options, 'secretKey', options);

    if (!this._secretKey) {
      throw new FoundrybotError({
        message: 'Missing required parameter "secretKey".',
        type: 'authentication_error'
      });
    }

    this.domainCrawl = new DomainCrawlResource(options);
  }
}

module.exports = FoundrybotClient;