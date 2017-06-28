import * as _ from 'lodash';
import {
  FoundrybotSearchAttributes,
  Resource
} from '../../resource';

export interface FoundrybotUrlSnapshotMetadata {
  id: number;
  name?: string;
  content?: number;
  urlSnapshotId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface FoundrybotUrlSnapshotMetadataSearchAttributes extends FoundrybotSearchAttributes {
  name?: string;
  content?: number;
  urlSnapshotId?: number;
  domainCrawlId?: number;
}

/**
 * @class UrlSnapshotMetadataResource
 * @extends Resource
 */
export class UrlSnapshotMetadataResource extends Resource {

  constructor (secretKey: string) {
    super(secretKey);
    this.resourceName = 'UrlSnapshotMetadata';
  }

  /**
   * @param params {FoundrybotUrlSnapshotMetadataSearchAttributes}
   * @returns {Promise<{docs: FoundrybotUrlSnapshotMetadata[], total: number}>}
   */
  search (params: FoundrybotUrlSnapshotMetadataSearchAttributes) {
    return this.makeRequest({
      method: 'GET',
      query: _.pick(params, ['limit', 'offset', 'name', 'content', 'urlSnapshotId', 'domainCrawlId']),
      url: '/url-snapshot-metadata'
    })
  }

}