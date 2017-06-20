"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Request = require("request-promise");
const _ = require("lodash");
const packageJson = require("./../package.json");
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
            throw new error_1.FoundrybotError(err.error);
        });
    }
    buildHeaders() {
        return {
            'Authorization': `Basic ${this.secretKey}:`,
            "User-Agent": `Foundrybot node v${packageJson.version} +(${packageJson.homepage})`
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
