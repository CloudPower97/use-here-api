import axios from 'axios';

interface ApiKeyAuthentication {
  /**
   *
   * A 43-byte Base64 URL-safe encoded string used for the authentication of the client application.
   *
   * As a logged in user, you can generate it at https://developer.here.com/projects.
   *
   * API Keys never expire but you can invalidate your API Keys at any time.
   *
   * You cannot have more than two API Keys for one app at the same time.
   *
   * You must include an apiKey with every request.
   *
   * @type {string}
   * @memberof ApiKeyAuthentication
   * @see https://developer.here.com/documentation/geocoder/dev_guide/topics/credentials-auth-options.html
   */
  apiKey: string;
}

interface AppCodeAppIdAuthentication {
  /**
   *
   * A 20-byte Base64 URL-safe encoded string used in one of the available authentication options for the Geocoder API.
   *
   * If you use the app ID/app code option, you need to include an app_id and app_code with every request.
   *
   * @type {string}
   * @memberof AppCodeAppIdAuthentication
   * @see https://developer.here.com/documentation/geocoder/dev_guide/topics/credentials-auth-options.html
   */
  app_id: string;
  /**
   *
   * A 20-byte Base64 URL-safe encoded string used for the authentication of the client application.
   *
   * If you use the app ID/app code option, you need to include an app_id and app_code with every request.
   *
   * @type {string}
   * @memberof AppCodeAppIdAuthentication
   * @see https://developer.here.com/documentation/geocoder/dev_guide/topics/credentials-auth-options.html
   */
  app_code: string;
}

interface TokenAuthentication {
  /**
   *
   * An URL-encoded Base64 string of typically (but not guaranteed to be) 24 bytes.
   *
   * The token is generated based on the user's app_id and received after the registration process of the application.
   *
   * @type {string}
   * @memberof TokenAuthentication
   * @deprecated Parameter token is deprecated, use app_code instead.
   */
  token: string;
}

type Auth =
  | ApiKeyAuthentication
  | AppCodeAppIdAuthentication
  | TokenAuthentication;

export default (params: Auth) => {
  axios.defaults.params = { ...params, jsonattributes: 1 };
};
