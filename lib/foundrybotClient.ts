import { FoundrybotError } from 'error';
import { DomainCrawlResource } from './resources/domainCrawl/domainCrawlResource';

export class FoundrybotClient {

  public domainCrawl: DomainCrawlResource;
  private secretKey: String;

  constructor(secretKey: string) {

    this.secretKey = secretKey;

    if (!this.secretKey) {
      throw new FoundrybotError('Missing required parameter "secretKey".', 'authentication_error');
    }

    this.domainCrawl = new DomainCrawlResource(secretKey);

  }


}