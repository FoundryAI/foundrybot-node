"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Request = require("request-promise");
const _ = require("lodash");
const error_1 = require("./error");
class Resource {
    constructor(secretKey) {
        this.secretKey = secretKey;
        if (!this.secretKey) {
            throw new error_1.FoundrybotError('Missing required parameter "secretKey".', 'authentication_error');
        }
    }
    makeRequest(requestConfig) {
        return Request({
            baseUrl: 'https://api.foundrybot.com/v1',
            body: requestConfig.data || {},
            headers: this.buildHeaders(),
            method: requestConfig.method,
            qs: requestConfig.query || {},
            timeout: 60000,
            uri: this.buildUrl(requestConfig),
            json: true
        })
            .catch(err => {
            throw new error_1.FoundrybotError(err.message, err.type);
        });
    }
    buildHeaders() {
        const encoded = new Buffer(`${this.secretKey}:`).toString('base64');
        return {
            'Authorization': `Basic ${encoded}`,
            "User-Agent": `Foundrybot node v1.0.0 +(https://github.com/FoundryAI/foundrybot-node#readme)`
        };
    }
    buildUrl(requestConfig) {
        let url = requestConfig.url;
        _.mapKeys(requestConfig.params, (value, key) => {
            url = url.replace(`{${key}}`, value);
        });
        return url;
    }
}
exports.Resource = Resource;
