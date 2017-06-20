"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const resource_1 = require("../../resource");
class UrlSnapshotContentResource extends resource_1.Resource {
    constructor(secretKey) {
        super(secretKey);
        this.resourceName = 'UrlSnapshotContent';
    }
    search(params) {
        return this.makeRequest({
            method: 'GET',
            query: _.pick(params, ['limit', 'offset', 'query', 'urlSnapshotContentId', 'urlSnapshotId', 'domainCrawlId']),
            url: '/url-snapshot-contents'
        });
    }
}
exports.UrlSnapshotContentResource = UrlSnapshotContentResource;
