import * as _ from 'lodash';
import {
  FoundrybotGetAttributes, FoundrybotUpdateAttributes,
  Resource
} from "../../resource";

export interface FoundrybotOrg {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FoundrybotOrgUpdateAttributes extends FoundrybotUpdateAttributes {
  id: number;
  name: string;
}

/**
 * @class OrgResource
 * @extends Resource
 */
export class OrgResource extends Resource {

  constructor (secretKey: string) {
    super(secretKey);
    this.resourceName = 'Org';
  }

  /**
   * @param params {FoundrybotGetAttributes}
   * @returns {Promise<FoundrybotOrg>}
   */
  get (params: FoundrybotGetAttributes) {
    return this.makeRequest({
      method: 'GET',
      params: _.pick(params, ['id']),
      url: '/orgs/{id}'
    })
  }

  /**
   * @param params {FoundrybotOrgUpdateAttributes}
   * @returns {Promise<{FoundrybotOrg}>}
   */
  update (params: FoundrybotOrgUpdateAttributes) {
    return this.makeRequest({
      method: 'PUT',
      data: { doc: _.pick(params, ['name']) },
      url: `/orgs/{id}`
    })
  }

}