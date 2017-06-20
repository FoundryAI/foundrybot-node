import * as _ from 'lodash';
import {
  FoundrybotSearchAttributes,
  Resource
} from '../../resource';

export interface FoundrybotUrlSnapshotMedia {
  id: number;
  srcUrl: string;
  width: number;
  height: number;
  mimeType: string;
  urlSnapshotId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface FoundrybotUrlSnapshotMediaSearchAttributes extends FoundrybotSearchAttributes {
  srcUrl?: string;
  width?: number;
  height?: number;
  mimeType?: string;
  urlSnapshotId?: number;
  domainCrawlId?: number;
}

/**
 * @class UrlSnapshotMediaResource
 * @extends Resource
 */
export class UrlSnapshotMediaResource extends Resource {

  constructor (secretKey: string) {
    super(secretKey);
    this.resourceName = 'UrlSnapshotMedia';
  }

  /**
   * @param params {FoundrybotUrlSnapshotMediaSearchAttributes}
   * @returns {Promise<{docs: FoundrybotUrlSnapshotMedia[], total: number}>}
   */
  search (params: FoundrybotUrlSnapshotMediaSearchAttributes) {
    return this.makeRequest({
      method: 'GET',
      query: _.pick(params, ['limit', 'offset', 'srcUrl', 'width', 'height', 'mimeType', 'urlSnapshotId', 'domainCrawlId']),
      url: '/url-snapshot-media'
    })
  }

}