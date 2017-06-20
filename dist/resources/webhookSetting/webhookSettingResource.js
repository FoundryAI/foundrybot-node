"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const resource_1 = require("../../resource");
class WebhookSettingResource extends resource_1.Resource {
    constructor(secretKey) {
        super(secretKey);
        this.resourceName = 'WebhookSetting';
    }
    subscribe(params) {
        return this.makeRequest({
            method: 'POST',
            data: _.pick(params, ['type', 'urlEndpoint']),
            url: '/webhook-settings/subscribe'
        })
            .then((result) => result.doc);
    }
    unsubscribe(params) {
        return this.makeRequest({
            method: 'POST',
            data: _.pick(params, ['type']),
            url: '/webhook-settings/unsubscribe'
        })
            .then((result) => result.doc);
    }
}
exports.WebhookSettingResource = WebhookSettingResource;
