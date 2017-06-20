"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const resource_1 = require("../../resource");
class UrlSnapshotMediaResource extends resource_1.Resource {
    constructor(secretKey) {
        super(secretKey);
        this.resourceName = 'UrlSnapshotMedia';
    }
    search(params) {
        return this.makeRequest({
            method: 'GET',
            query: _.pick(params, ['limit', 'offset', 'srcUrl', 'width', 'height', 'mimeType', 'urlSnapshotId', 'domainCrawlId']),
            url: '/url-snapshot-media'
        });
    }
}
exports.UrlSnapshotMediaResource = UrlSnapshotMediaResource;
