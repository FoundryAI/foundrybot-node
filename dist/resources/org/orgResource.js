"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const resource_1 = require("../../resource");
class OrgResource extends resource_1.Resource {
    constructor(secretKey) {
        super(secretKey);
        this.resourceName = 'Org';
    }
    get(id) {
        return this.makeRequest({
            method: 'GET',
            params: { id },
            url: '/orgs/{id}'
        });
    }
    update(params) {
        return this.makeRequest({
            method: 'PUT',
            data: { doc: _.pick(params, ['name']) },
            url: `/orgs/{id}`
        });
    }
}
exports.OrgResource = OrgResource;
