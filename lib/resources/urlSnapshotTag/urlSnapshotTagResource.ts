import * as _ from 'lodash';
import {
  FoundrybotSearchAttributes,
  Resource
} from '../../resource';

export interface FoundrybotUrlSnapshotTag {
  id: number;
  tag: string;
  urlSnapshotId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface FoundrybotUrlSnapshotTagSearchAttributes extends FoundrybotSearchAttributes {
  tag?: string;
  urlSnapshotId?: number;
  domainCrawlId?: number;
}

/**
 * @class UrlSnapshotTagResource
 * @extends Resource
 */
export class UrlSnapshotTagResource extends Resource {

  constructor (secretKey: string) {
    super(secretKey);
    this.resourceName = 'UrlSnapshotTag';
  }

  /**
   * @param params {FoundrybotUrlSnapshotTagSearchAttributes}
   * @returns {Promise<{docs: FoundrybotUrlSnapshotTag[], total: number}>}
   */
  search (params: FoundrybotUrlSnapshotTagSearchAttributes) {
    return this.makeRequest({
      method: 'GET',
      query: _.pick(params, ['limit', 'offset', 'tag', 'urlSnapshotId', 'domainCrawlId']),
      url: '/url-snapshot-tags'
    })
  }

}