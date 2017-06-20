import * as _ from 'lodash';
import {
  FoundrybotSearchAttributes,
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
   * @param id {string}
   * @returns {Promise<FoundrybotEvent>}
   */
  get (id: string) {
    return this.makeRequest({
      method: 'GET',
      params: { id },
      url: '/events/{id}'
    })
    .then((result) => result.doc)
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