/// <reference path="references.d.ts" />

import * as tnsOauth from './tns-oauth';
import { AuthHelper } from './auth-helper';
import * as TnsOAuth from './tns-oauth-interfaces';

/**
 Contains GitHub connection credentials
*/
export class AuthHelperGitHub extends AuthHelper implements TnsOAuth.ITnsAuthHelper {
  //Constructs the the object with specified id, secret and scope
  constructor(clientId: string, scope: Array<string>) {
    super();
    var scopeStr = scope.join('%20');
    this.credentials = {
      authority: 'https://github.com',
      tokenEndpointBase: 'https://github.com',
      authorizeEndpoint: '/login/oauth/authorize',
      tokenEndpoint: '/login/oauth/access_token',
      clientId: clientId,
      clientSecret: "",
      redirectUri: "",
      scope: scopeStr
    };
  }
  //Gets cookie domains for logging out
  public logout(successPage?: string): Promise<void> {
    let cookieDomains = [".github.com"];
    return this._logout(successPage, cookieDomains);
  }
}
