"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const resource_1 = require("../../resource");
class UrlSnapshotMetadataResource extends resource_1.Resource {
    constructor(secretKey) {
        super(secretKey);
        this.resourceName = 'UrlSnapshotMetadata';
    }
    search(params) {
        return this.makeRequest({
            method: 'GET',
            query: _.pick(params, ['limit', 'offset', 'name', 'content', 'urlSnapshotId', 'domainCrawlId']),
            url: '/url-snapshot-metadata'
        });
    }
}
exports.UrlSnapshotMetadataResource = UrlSnapshotMetadataResource;
