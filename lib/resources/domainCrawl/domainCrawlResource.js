const Resource = require('../resource');

class DomainCrawlResource extends Resource {

  constructor (options = {}) {
    super(options);
    this._resourceName = 'DomainCrawl';
  }

  /**
   * @param {object} data
   * @param {string} data.id
   * @return Promise
   */
  get (data) {
    return this.makeRequest({
      method: 'GET',
      params: { id: data.id },
      url: '/domain-crawls/{id}'
    })
  }

  /**
   * @name DomainCrawlSearchAttributes
   * @augments FoundrybotSearchAttributes
   * @type
   */

  /**
   *
   * @param data
   */
  search (data) {

  }
}

module.exports = DomainCrawlResource;
