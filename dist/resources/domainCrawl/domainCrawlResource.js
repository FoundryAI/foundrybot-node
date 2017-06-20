"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const resource_1 = require("../../resource");
class DomainCrawlResource extends resource_1.Resource {
    constructor(secretKey) {
        super(secretKey);
        this.resourceName = 'DomainCrawl';
    }
    get(id) {
        return this.makeRequest({
            method: 'GET',
            params: { id },
            url: '/domain-crawls/{id}'
        })
            .then((result) => result.doc);
    }
    search(params) {
        return this.makeRequest({
            method: 'GET',
            query: _.pick(params, ['limit', 'offset', 'url']),
            url: '/domain-crawls'
        });
    }
    create(params) {
        return this.makeRequest({
            method: 'POST',
            data: _.pick(params, ['url', 'maxUrls']),
            url: '/domain-crawls'
        })
            .then((result) => result.doc);
    }
}
exports.DomainCrawlResource = DomainCrawlResource;
