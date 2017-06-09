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
   * @param {object} data
   * @param {string} data.customerId
   * @param {string} data.referrer
   * @param {[startDate, endDate]} data.dateRange
   * @param {string} data.gatId
   * @param {string} data.status
   * @param {string} data.limit
   * @param {string} data.offset
   * @param {string} data.sortBy
   * @param {string} data.sortDir
   * @return Promise
   */
  search (data) {

  }
}

module.exports = DomainCrawlResource;
