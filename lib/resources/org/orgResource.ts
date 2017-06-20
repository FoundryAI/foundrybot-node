import * as _ from 'lodash';
import {
  FoundrybotUpdateAttributes,
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
   * @param id {string}
   * @returns {Promise<FoundrybotOrg>}
   */
  get (id: string) {
    return this.makeRequest({
      method: 'GET',
      params: { id },
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