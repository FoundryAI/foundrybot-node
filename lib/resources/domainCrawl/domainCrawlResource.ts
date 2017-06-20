import * as Promise from 'bluebird';
import * as _ from 'lodash';
import {
  FoundrybotCreateAttributes, FoundrybotSearchAttributes,
  Resource
} from '../../resource';

export interface FoundrybotDomainCrawl {
  id: number;
  orgId: number;
  domainHostname: string;
  urlHref: string;
  maxUrls: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface FoundrybotDomainCrawlSearchAttributes extends FoundrybotSearchAttributes {
  url: string;
}

export interface FoundrybotDomainCrawlCreateAttributes extends FoundrybotCreateAttributes {
  url?: string;
  maxUrls?: number;
}

/**
 * @class DomainCrawlResource
 * @extends Resource
 */
export class DomainCrawlResource extends Resource {

  /**
   * @param secretKey {string}
   */
  constructor (secretKey: string) {
    super(secretKey);
    this.resourceName = 'DomainCrawl';
  }

  /**
   * @param id {string}
   * @returns {Promise<FoundrybotDomainCrawl>}
   */
  get (id: string) {
    return this.makeRequest({
      method: 'GET',
      params: { id },
      url: '/domain-crawls/{id}'
    })
  }

  /**
   * @param params {FoundrybotDomainCrawlSearchAttributes}
   * @returns {Promise<{docs: FoundrybotDomainCrawl[], total: number}>}
   */
  search (params: FoundrybotDomainCrawlSearchAttributes) {
    return this.makeRequest({
      method: 'GET',
      query: _.pick(params, ['limit', 'offset', 'url']),
      url: '/domain-crawls'
    })
  }

  /**
   * @param params {FoundrybotDomainCrawlCreateAttributes}
   * @returns {Promise<FoundrybotDomainCrawl>}
   */
  create (params: FoundrybotDomainCrawlCreateAttributes) {
    return this.makeRequest({
      method: 'POST',
      data: _.pick(params, ['url', 'maxUrls']),
      url: '/domain-crawls'
    })
  }

}