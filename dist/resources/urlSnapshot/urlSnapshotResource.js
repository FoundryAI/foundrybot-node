"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const resource_1 = require("../../resource");
class UrlSnapshotResource extends resource_1.Resource {
    constructor(secretKey) {
        super(secretKey);
        this.resourceName = 'UrlSnapshot';
    }
    get(id) {
        return this.makeRequest({
            method: 'GET',
            params: { id },
            url: '/url-snapshots/{id}'
        });
    }
    search(params) {
        return this.makeRequest({
            method: 'GET',
            query: _.pick(params, ['limit', 'offset', 'urlHref', 'domainHostname']),
            url: '/url-snapshots'
        });
    }
}
exports.UrlSnapshotResource = UrlSnapshotResource;
