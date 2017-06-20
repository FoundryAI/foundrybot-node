import * as _ from 'lodash';
import {
  Resource
} from '../../resource';

export interface FoundrybotWebhookSetting {
  id: number;
  orgId: number;
  urlEndpoint: string;
  isSubscribed: boolean;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FoundrybotWebhookSettingSubscribeAttributes {
  type: string;
  urlEndpoint: string;
}

export interface FoundrybotWebhookSettingUnsubscribeAttributes {
  type: string;
}

/**
 * @class WebhookSettingResource
 * @extends Resource
 */
export class WebhookSettingResource extends Resource {

  constructor (secretKey: string) {
    super(secretKey);
    this.resourceName = 'WebhookSetting';
  }

  /**
   * @param params {FoundrybotWebhookSettingSubscribeAttributes}
   * @returns {Promise<{FoundrybotWebhookSetting}>}
   */
  subscribe (params: FoundrybotWebhookSettingSubscribeAttributes) {
    return this.makeRequest({
      method: 'POST',
      data: _.pick(params, ['type', 'urlEndpoint']),
      url: '/webhook-settings/subscribe'
    })
  }

  /**
   * @param params {FoundrybotWebhookSettingUnsubscribeAttributes}
   * @returns {Promise<{FoundrybotWebhookSetting}>}
   */
  unsubscribe (params: FoundrybotWebhookSettingUnsubscribeAttributes) {
    return this.makeRequest({
      method: 'POST',
      data: _.pick(params, ['type']),
      url: '/webhook-settings/unsubscribe'
    })
  }

}