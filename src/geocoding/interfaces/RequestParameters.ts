import AddressAttributes from './AddressAttributes';

export default interface RequestParameters {
  /**
   * Key-value pairs that provide additional input to requests.
   * Key and value are separated using a ,. Multiple key-value pairs are separated using a ;
   *
   * @type {string}
   * @memberof GeocodingRequestParameters
   * @example
   * additionaldata=PreserveUnitDesignators,true;IncludeZipAddon,true
   * @see https://developer.here.com/documentation/geocoder/dev_guide/topics/resource-params-additional.html for a full list.
   */
  additionaldata?: string;
  /**
   * A comma-separated list whose elements are present in the response data.
   *
   * Enumeration [country, state, county, city, district, subdistrict, street, houseNumber, postalCode, addressLines, additionalData]
   *
   * Abbreviated forms: [ctr, sta, cty, cit, dis, sdi, str, hnr, pst, aln, add]
   *
   * Note: The value names are case-sensitive.
   * @type {addressattributes[]}
   * @memberof GeocodingRequestParameters
   * @default All except addressLines.
   */
  addressattributes?: AddressAttributes[];
  /**
   *
   * The gen parameter enables or disables backward incompatible behavior in the API.
   *
   * The latest generation is always recommended.
   *
   * This is currently gen=9
   *
   * @type {number}
   * @memberof GeocodingRequestParameters
   * @see https://developer.here.com/documentation/geocoder/dev_guide/topics/backwards-compatibility.html#backwards-compatibility__api-different-generations for details and the generation history.
   */
  gen?: number;
  /**
   *
   * If set to 1, the first character of each JSON response attribute name is set to lower case
   *
   * @type {number}
   * @memberof GeocodingRequestParameters
   * @default 0
   */
  jsonattributes?: number;
  /**
   *
   * Specifies the name of a user-defined function used to wrap the JSON response.
   *
   * @type {string}
   * @memberof GeocodingRequestParameters
   */
  jsoncallback?: string;
  /**
   *
   * The preferred language of address elements in the result.
   *
   * Without a preferred language, the Geocoder will return results in an official country language or in a regional primary language so that local people will understand.
   *
   * Language code must be provided according to RFC 4647 standard.
   *
   * Note that the plural form of the parameter (languages) is supported as well. But only the last specified language in the list is used.
   *
   * All preceding language preferences are ignored at this time
   * @type {*}
   * @memberof GeocodingRequestParameters
   */
  language?: any;
  /**
   * A comma-separated list whose elements are present in the response data.
   *
   * Enumeration [address, mapReference, mapView, addressDetails, streetDetails, additionalData, adminIds, linkInfo, adminInfo, timeZone, addressNamesBilingual, related.nearByAddress]
   *
   * Abbreviated forms: [ar, mr, mv, dt, sd, ad, ai, li, in, tz, nb, rn]
   *
   * The adminIds switch is available with forward geocoding only.
   *
   * For retrieving Time Zone information the parameter adminInfo has to be added, e.g., locationattributes=adminInfo,timeZone
   *
   * In reverse geocoding results, adminIds are always present unless turned off through locationattributes=none.
   *
   * locationattributes=-adminIds has no effect on reverse geocoding results.
   *
   * The related.nearByAddress switch is available with the trackPosition mode of reverse geocoding only.
   *
   * Default in reverse geocoding response: address, mapView, additionalData, mapReference, adminIds.
   * Default in forward geocoding response: address, mapView, additionalData.
   *
   * With mapReference link PVID, side of street, and admin area PVIDs are present in the response data.
   * With adminIds, only admin area PVIDs are present.
   *
   * Note: The value names are case-sensitive
   *
   * @type {string}
   * @memberof GeocodingRequestParameters
   */
  locationattributes?: string[];
  /**
   *
   * Defines the maximum number of items in the response structure, limiting the number of results included in each response page.
   *
   * When more results than the defined maximum are available, then these are returned on additional, separate pages.
   *
   * Each response structure (page) contains a handle to the next page.
   *
   * For example, maxresults=5 produces a maximum of 5 results per response page.
   *
   * If there are eight results in total, the first page contains five results and indicates that there is a second page with further results.
   *
   * @type {number}
   * @memberof GeocodingRequestParameters
   * @example maxresults=5
   */
  maxresults?: number;
  /**
   *
   * A key which identifies the page to be returned when the response is separated into multiple pages.
   *
   * Only relevant, if maxresults has been specified in a the original request and the request response indicates that there is a further page
   *
   * @type {string}
   * @memberof GeocodingRequestParameters
   */
  pageinformation?: string;
  /**
   *
   * Specify the political view.
   *
   * Available territories will be seen through the point of view of this country.
   *
   * If this parameter is not specified the neutral international view is made available, where territories may have unresolved claims.
   *
   * For any political view that is unsupported the Geocoder, falls back to the default view.
   *
   * For example, politicalview=USA or politicalview=FRA does not impact a response in any way.
   *
   * @type {string}
   * @memberof GeocodingRequestParameters
   * @see https://developer.here.com/documentation/geocoder/dev_guide/topics/political-views.html for a complete list of supported views
   */
  politicalview?: string;
  /**
   * A type of SpatialFilter.
   *
   * A spatial filter limits the search for any other attributes on the request.
   *
   * Proximity specifies a circle to search using a latitude, a longitude, and a radius in meters.
   *
   * Search is similar to mapview. Matches from inside set area are ranked higher.
   *
   * Relevant global results are also returned.
   *
   * @type {string}
   * @memberof GeocodingRequestParameters
   */
  prox?: string;
  /**
   * A comma-separated list whose elements are present in the response data.
   *
   * Enumeration [performedSearch, matchQuality, matchType, matchCode, parsedRequest]
   *
   * Abbreviated forms: [ps, mq, mt, mc, pr]
   *
   * Default in response:
   *
   * Note: the value names are case-sensitive
   *
   * @type {string[]}
   * @memberof GeocodingRequestParameters
   * @default [matchQuality, matchType]
   */
  responseattributes?: string[];
  /**
   *
   * True - if the value is available in the first language specified in the language parameter the attribute value is set directly in Address, Place, Location, and Category elements.
   * Values in alternative languages are returned in the AlternativeValues element.
   *
   * False - the best available attribute value based on the language priorities given in language parameter is returned directly in Address, Place, Location, and Category elements.
   * No alternatives are returned
   *
   * @type {boolean}
   * @memberof GeocodingRequestParameters
   */
  strictlanguagemode?: boolean;
}
