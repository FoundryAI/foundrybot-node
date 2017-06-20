"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("./error");
const domainCrawlResource_1 = require("./resources/domainCrawl/domainCrawlResource");
const eventResource_1 = require("./resources/event/eventResource");
const orgResource_1 = require("./resources/org/orgResource");
const urlSnapshotResource_1 = require("./resources/urlSnapshot/urlSnapshotResource");
const urlSnapshotContentResource_1 = require("./resources/urlSnapshotContent/urlSnapshotContentResource");
const urlSnapshotLinkResource_1 = require("./resources/urlSnapshotLink/urlSnapshotLinkResource");
const urlSnapshotMediaResource_1 = require("./resources/urlSnapshotMedia/urlSnapshotMediaResource");
const urlSnapshotTagResource_1 = require("./resources/urlSnapshotTag/urlSnapshotTagResource");
const webhookSettingResource_1 = require("./resources/webhookSetting/webhookSettingResource");
class FoundrybotClient {
    static create(secretKey) {
        return new FoundrybotClient(secretKey);
    }
    constructor(secretKey) {
        this.secretKey = secretKey;
        if (!this.secretKey) {
            throw new error_1.FoundrybotError('Missing required parameter "secretKey".', 'authentication_error');
        }
        this.domainCrawl = new domainCrawlResource_1.DomainCrawlResource(secretKey);
        this.event = new eventResource_1.EventResource(secretKey);
        this.org = new orgResource_1.OrgResource(secretKey);
        this.urlSnapshot = new urlSnapshotResource_1.UrlSnapshotResource(secretKey);
        this.urlSnapshotContent = new urlSnapshotContentResource_1.UrlSnapshotContentResource(secretKey);
        this.urlSnapshotLink = new urlSnapshotLinkResource_1.UrlSnapshotLinkResource(secretKey);
        this.urlSnapshotMedia = new urlSnapshotMediaResource_1.UrlSnapshotMediaResource(secretKey);
        this.urlSnapshotTag = new urlSnapshotTagResource_1.UrlSnapshotTagResource(secretKey);
        this.webhookSetting = new webhookSettingResource_1.WebhookSettingResource(secretKey);
    }
}
exports.FoundrybotClient = FoundrybotClient;
