import * as Request from 'request-promise';
import * as _ from 'lodash'

import * as packageJson from '../package.json';

import { FoundrybotError } from 'error';


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

  private resourceName: string;
  private secretKey: string;

  get resourceName(): string {
    return this.resourceName;
  }

  get secretKey(): string {
    return this.secretKey;
  }

  set resourceName(name: string) {
    this.resourceName = name;
  }

  set secretKey(key: string) {
    this.secretKey = key;
  }

  constructor(secretKey: string) {

    this.secretKey = secretKey;

    if (!this.secretKey) {
      throw new FoundrybotError('Missing required parameter "secretKey".', 'authentication_error');
    }

  }

  public abstract get?(params: FoundrybotGetAttributes): void;

  public abstract search?(params: FoundrybotSearchAttributes): void;

  public abstract create?(params: FoundrybotCreateAttributes): void;

  public abstract update?(params: FoundrybotUpdateAttributes): void;

  public abstract delete?(params: FoundrybotDeleteAttributes): void;

  public makeRequest(requestConfig: FoundrybotRequestAttributes) {
    return Request({
      baseUrl: 'https://api.foundrybot.com/v1',
      body: requestConfig.data || {},
      headers: this.buildHeaders(),
      method: requestConfig.method,
      qs: requestConfig.query || {},
      timeout: require('http').createServer().timeout,
      uri: this.buildUrl(requestConfig),
      json: true
    })
    .catch(err => {
      throw new FoundrybotError(err.error);
    })
  }

  private buildHeaders() {
    return {
      'Authorization': `Basic ${this.secretKey}:`,
      "User-Agent": `Foundrybot node v${packageJson.version} +(${packageJson.homepage})`
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