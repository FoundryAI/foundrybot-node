"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const resource_1 = require("../../resource");
class EventResource extends resource_1.Resource {
    constructor(secretKey) {
        super(secretKey);
        this.resourceName = 'Event';
    }
    get(id) {
        return this.makeRequest({
            method: 'GET',
            params: { id },
            url: '/events/{id}'
        });
    }
    search(params) {
        return this.makeRequest({
            method: 'GET',
            query: _.pick(params, ['limit', 'offset', 'type']),
            url: '/events'
        });
    }
}
exports.EventResource = EventResource;
