import { FoundrybotError } from './error';
import { DomainCrawlResource } from './resources/domainCrawl/domainCrawlResource';
import { EventResource } from './resources/event/eventResource';
import { OrgResource } from './resources/org/orgResource';
import { UrlSnapshotResource } from './resources/urlSnapshot/urlSnapshotResource';
import { UrlSnapshotContentResource } from './resources/urlSnapshotContent/urlSnapshotContentResource';
import { UrlSnapshotLinkResource } from './resources/urlSnapshotLink/urlSnapshotLinkResource';
import { UrlSnapshotMediaResource } from './resources/urlSnapshotMedia/urlSnapshotMediaResource';
import { UrlSnapshotTagResource } from './resources/urlSnapshotTag/urlSnapshotTagResource';
import { WebhookSettingResource } from './resources/webhookSetting/webhookSettingResource';

export class FoundrybotClient {

  public domainCrawl: DomainCrawlResource;
  public event: EventResource;
  public org: OrgResource;
  public urlSnapshot: UrlSnapshotResource;
  public urlSnapshotContent: UrlSnapshotContentResource;
  public urlSnapshotLink: UrlSnapshotLinkResource;
  public urlSnapshotMedia: UrlSnapshotMediaResource;
  public urlSnapshotTag: UrlSnapshotTagResource;
  public webhookSetting: WebhookSettingResource;
  private secretKey: String;

  constructor(secretKey: string) {

    this.secretKey = secretKey;

    if (!this.secretKey) {
      throw new FoundrybotError('Missing required parameter "secretKey".', 'authentication_error');
    }

    this.domainCrawl = new DomainCrawlResource(secretKey);
    this.event = new EventResource(secretKey);
    this.org = new OrgResource(secretKey);
    this.urlSnapshot = new UrlSnapshotResource(secretKey);
    this.urlSnapshotContent = new UrlSnapshotContentResource(secretKey);
    this.urlSnapshotLink = new UrlSnapshotLinkResource(secretKey);
    this.urlSnapshotMedia = new UrlSnapshotMediaResource(secretKey);
    this.urlSnapshotTag = new UrlSnapshotTagResource(secretKey);
    this.webhookSetting = new WebhookSettingResource(secretKey);

  }


}