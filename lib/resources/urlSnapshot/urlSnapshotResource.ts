import * as _ from 'lodash';
import {
  FoundrybotGetAttributes, FoundrybotSearchAttributes,
  Resource
} from '../../resource';

export interface FoundrybotUrlSnapshot {
  id: number;
  urlHref: string;
  domainHostname: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FoundrybotUrlSnapshotSearchAttributes extends FoundrybotSearchAttributes {
  urlHref?: string;
  domainHostname?: string;
}

/**
 * @class UrlSnapshotResource
 * @extends Resource
 */
export class UrlSnapshotResource extends Resource {

  constructor (secretKey: string) {
    super(secretKey);
    this.resourceName = 'UrlSnapshot';
  }

  /**
   * @param params {FoundrybotGetAttributes}
   * @returns {Promise<FoundrybotUrlSnapshot>}
   */
  get (params: FoundrybotGetAttributes) {
    return this.makeRequest({
      method: 'GET',
      params: _.pick(params, ['id']),
      url: '/url-snapshots/{id}'
    })
  }

  /**
   * @param params {FoundrybotUrlSnapshotSearchAttributes}
   * @returns {Promise<{docs: FoundrybotUrlSnapshot[], total: number}>}
   */
  search (params: FoundrybotUrlSnapshotSearchAttributes) {
    return this.makeRequest({
      method: 'GET',
      query: _.pick(params, ['limit', 'offset', 'urlHref', 'domainHostname']),
      url: '/url-snapshots'
    })
  }

}