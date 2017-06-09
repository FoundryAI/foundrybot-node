import { FoundrybotError } from 'foundrybotError';

export class FoundrybotClient {

  public domainCrawl: DomainCrawlResource;
  private secretKey: String;

  /**
   * @constructor
   * @class FoundrybotClient
   * @param secret {string}
   */
  constructor (secret: string) {
    if (!secret) throw new FoundrybotError({
      message: 'Missing required parameter "secretKey".',
      type: 'authentication_error'
    });
  }

}