"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const resource_1 = require("../../resource");
class UrlSnapshotLinkResource extends resource_1.Resource {
    constructor(secretKey) {
        super(secretKey);
        this.resourceName = 'UrlSnapshotLink';
    }
    search(params) {
        return this.makeRequest({
            method: 'GET',
            query: _.pick(params, ['limit', 'offset', 'urlHref', 'urlSnapshotId', 'domainCrawlId']),
            url: '/url-snapshot-links'
        });
    }
}
exports.UrlSnapshotLinkResource = UrlSnapshotLinkResource;
