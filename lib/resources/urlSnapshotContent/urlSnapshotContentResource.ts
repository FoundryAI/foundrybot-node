import * as _ from 'lodash';
import {
  FoundrybotSearchAttributes,
  Resource
} from '../../resource';

export interface FoundrybotUrlSnapshotContent {
  id: number;
  title: string;
  description: string;
  htmlUrl: string;
  cleanTextContent: string;
  contentSummary: string;
  urlSnapshotId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface FoundrybotUrlSnapshotContentSearchAttributes extends FoundrybotSearchAttributes {
  query?: string;
  urlSnapshotContentId?: number;
  urlSnapshotId?: number;
  domainCrawlId?: number;
}

/**
 * @class UrlSnapshotContentResource
 * @extends Resource
 */
export class UrlSnapshotContentResource extends Resource {

  constructor (secretKey: string) {
    super(secretKey);
    this.resourceName = 'UrlSnapshotContent';
  }

  /**
   * @param params {FoundrybotUrlSnapshotContentSearchAttributes}
   * @returns {Promise<{docs: FoundrybotUrlSnapshotContent[], total: number}>}
   */
  search (params: FoundrybotUrlSnapshotContentSearchAttributes) {
    return this.makeRequest({
      method: 'GET',
      query: _.pick(params, ['limit', 'offset', 'query', 'urlSnapshotContentId', 'urlSnapshotId', 'domainCrawlId']),
      url: '/url-snapshot-contents'
    })
  }

}