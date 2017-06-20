import * as _ from 'lodash';
import {
  FoundrybotGetAttributes, FoundrybotSearchAttributes,
  Resource
} from '../../resource';

export interface FoundrybotEvent {
  id: number;
  orgId: number;
  type: string;
  data: object;
  createdAt: Date;
  updatedAt: Date;
}

export interface FoundrybotEventSearchAttributes extends FoundrybotSearchAttributes {
  type?: string;
}

/**
 * @class EventResource
 * @extends Resource
 */
export class EventResource extends Resource {

  constructor (secretKey: string) {
    super(secretKey);
    this.resourceName = 'Event';
  }

  /**
   * @param params {FoundrybotGetAttributes}
   * @returns {Promise<FoundrybotEvent>}
   */
  get (params: FoundrybotGetAttributes) {
    return this.makeRequest({
      method: 'GET',
      params: _.pick(params, ['id']),
      url: '/events/{id}'
    })
  }

  /**
   * @param params {FoundrybotEventSearchAttributes}
   * @returns {Promise<{docs: FoundrybotEvent[], total: number}>}
   */
  search (params: FoundrybotEventSearchAttributes) {
    return this.makeRequest({
      method: 'GET',
      query: _.pick(params, ['limit', 'offset', 'type']),
      url: '/events'
    })
  }

}