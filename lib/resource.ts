import * as Request from 'request-promise';
import * as _ from 'lodash'

import { FoundrybotError } from './error';


export interface FoundrybotGetAttributes {
  id: number | string;
}

export interface FoundrybotSearchAttributes {
  limit: number;
  offset: number;
}

export interface  FoundrybotCreateAttributes {

}

export interface FoundrybotUpdateAttributes {

}

export interface FoundrybotDeleteAttributes {
  id: number | string;
}

export interface FoundrybotRequestAttributes {
  method: 'GET' | 'PUT' | 'POST' | 'DELETE';
  data?: object;
  query?: object;
  params?: object;
  url: string;
}

export abstract class Resource {

  protected resourceName: string;
  protected secretKey: string;

  constructor(secretKey: string) {

    this.secretKey = secretKey;

    if (!this.secretKey) {
      throw new FoundrybotError('Missing required parameter "secretKey".', 'authentication_error');
    }

  }

  public makeRequest(requestConfig: FoundrybotRequestAttributes) {
    return Request({
      baseUrl: 'https://api.foundrybot.com/v1',
      body: requestConfig.data || {},
      headers: this.buildHeaders(),
      method: requestConfig.method,
      qs: requestConfig.query || {},
      timeout: 60000,
      uri: this.buildUrl(requestConfig),
      json: true
    })
    .catch(err => {
      throw new FoundrybotError(err.message, err.type);
    })
  }

  private buildHeaders() {
    return {
      'Authorization': `Basic ${this.secretKey}:`,
      "User-Agent": `Foundrybot node v1.0.0 +(https://github.com/FoundryAI/foundrybot-node#readme)`
    }
  }

  private buildUrl(requestConfig) {
    let url = requestConfig.url;
    _.mapKeys(requestConfig.params, (value, key) => {
      url = url.replace(`{${key}}`, value)
    });
    return url;
  }
}