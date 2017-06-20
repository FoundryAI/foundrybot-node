"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const resource_1 = require("../../resource");
class UrlSnapshotTagResource extends resource_1.Resource {
    constructor(secretKey) {
        super(secretKey);
        this.resourceName = 'UrlSnapshotTag';
    }
    search(params) {
        return this.makeRequest({
            method: 'GET',
            query: _.pick(params, ['limit', 'offset', 'tag', 'urlSnapshotId', 'domainCrawlId']),
            url: '/url-snapshot-tags'
        });
    }
}
exports.UrlSnapshotTagResource = UrlSnapshotTagResource;
