const Request = require('request-promise');
const _ = require('lodash');

const FoundrybotError = require('../foundrybotError');

/**
 * @name FoundrybotSearch
 * @type {{
 *     id: Number,
 *     orgId: org.id|Number,
 *     publicKey: String,
 *     secretKey: String,
 *     createdAt: Date,
 *     updatedAt: Date
 * }}
 */

class Resource {

  constructor (options = {}) {
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
      'Authorization': `Basic ${this._encodeApiKey()}`,
      "User-Agent": 'Foundrybot/v1'
    }
  }

  _encodeApiKey() {
    return new Buffer(`${this._publicKey}:${this._secretKey}`).toString('base64')
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