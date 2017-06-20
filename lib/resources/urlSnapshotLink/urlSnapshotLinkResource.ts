import * as _ from 'lodash';
import {
  FoundrybotSearchAttributes,
  Resource
} from '../../resource';

export interface FoundrybotUrlSnapshotLink {
  id: number;
  urlHref: string;
  urlSnapshotId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface FoundrybotUrlSnapshotLinkSearchAttributes extends FoundrybotSearchAttributes {
  urlHref?: string;
  urlSnapshotId?: number;
  domainCrawlId?: number;
}

/**
 * @class UrlSnapshotLinkResource
 * @extends Resource
 */
export class UrlSnapshotLinkResource extends Resource {

  constructor (secretKey: string) {
    super(secretKey);
    this.resourceName = 'UrlSnapshotLink';
  }

  /**
   * @param params {FoundrybotUrlSnapshotLinkSearchAttributes}
   * @returns {Promise<{docs: FoundrybotUrlSnapshotLink[], total: number}>}
   */
  search (params: FoundrybotUrlSnapshotLinkSearchAttributes) {
    return this.makeRequest({
      method: 'GET',
      query: _.pick(params, ['limit', 'offset', 'urlHref', 'urlSnapshotId', 'domainCrawlId']),
      url: '/url-snapshot-links'
    })
  }

}