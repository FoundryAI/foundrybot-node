const Request = require('request-promise');
const _ = require('lodash');

const FoundrybotError = require('../foundrybotError');

/**
 * @name FoundrybotSearchAttributes
 * @type {{
 *     limit: Number,
 *     offset: Number,
 * }}
 */

class Resource {

  constructor (options = {}) {

    this._secretKey = _.get(options, 'secretKey', options);

    if (!this._secretKey) {
      throw new FoundrybotError({
        message: 'Missing required parameter "secretKey".',
        type: 'authentication_error'
      });
    }

  }

  makeRequest (requestConfig) {
    return Request({
      baseUrl: 'https://api.foundrybot.com/v1',
      body: requestConfig.data || {},
      headers: this._buildHeaders(requestConfig),
      method: requestConfig.method,
      qs: requestConfig.query || {},
      timeout: 30000,
      uri: this._buildUrl(requestConfig),
      json: true
    })
    .catch(err => {
      throw new FoundrybotError({
        message: err.error.message,
        type: `Foundrybot${this._resourceName}ResourceError`
      });
    })
  }

  _buildHeaders(requestConfig) {
    return {
      'Authorization': `Basic ${this._secretKey}:`,
      "User-Agent": 'Foundrybot/v1'
    }
  }

  _buildUrl(requestConfig) {
    let url = requestConfig.url;
    _.mapKeys(requestConfig.params, (value, key) => {
      url = url.replace(`{${key}}`, value)
    });
    return url;
  }
}

module.exports = Resource;