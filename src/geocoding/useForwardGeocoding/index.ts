import useAxios from '../../useAxios';
import ForwardGeocodingResponse from '../interfaces/SearchResponse';
import RequestParameters from '../interfaces/RequestParameters';

interface ForwardGeocodingRequestParameters extends RequestParameters {
  /**
   * A type of Spatial Filter.
   *
   * A spatial filter limits the search for any other attributes in the request.
   *
   * A bounding box bbox is specified by two latitude / longitude pairs;
   * the first pair defines the top left corner of the bounding box, the second set the lower right.
   *
   * The bbox search is currently similar to mapview but it is not extended.
   *
   * Relevant global results are also returned.
   *
   * @type {string}
   * @memberof GeocodingRequestParameters
   * @example bbox=41.9085286,-87.6762943;41.8682739,-87.6041965
   * @see https://developer.here.com/documentation/geocoder/dev_guide/topics/resource-type-bounding-box.html
   */
  bbox?: string;
  /**
   *
   * A country specific mapping is required.
   *
   * @type {string}
   * @memberof GeocodingRequestParameters
   * @example USA: City
   * @example Germany: Gemeinde
   */
  city?: string;
  /**
   *
   * Specify the country or list of countries using the country code (3 bytes, ISO 3166-1-alpha-3) or the country name.
   *
   * This is a strict filter. Results are restricted to the specified country or countries.
   *
   * Note: To avoid ambiguity we recommend to specify the country with the 3-letter ISO code and not with the spelled out country name.
   *
   * With names there is a higher risk of misspells and also not all language translations for all countries are supported
   *
   * @type {string}
   * @memberof GeocodingRequestParameters
   */
  contry?: string;
  /**
   *
   * Results from the specified country are preferred.
   *
   * This is a soft filter.
   *
   * Spelled out country names are not supported for country focus.
   *
   * If both hard country filter and soft country focus parameter are set in the request the country filter takes precedence over the focus.
   *
   * This means results are limited to countries specified with country filter.bbox or mapview filter take precedence over the country focus if there is a conflict
   *
   * @type {string}
   * @memberof GeocodingRequestParameters
   */
  countryfocus?: string;
  /**
   *
   * Second subdivision level below the country.
   *
   * Depending on the admin hierarchy in a country this level might not be applicable.
   *
   * @type {string}
   * @memberof GeocodingRequestParameters
   * @example USA: County
   * @example Germany: Kreis
   */
  county?: string;
  /**
   *
   * Subdivision level below the city.
   *
   * Depending on the admin hierarchy in a country this level might not be applicable
   *
   * @type {string}
   * @memberof GeocodingRequestParameters
   * @example USA: n/a
   * @example Germany: Ortsteil
   */
  district?: string;
  /**
   *
   * The house number or house name.
   *
   * @type {string}
   * @memberof GeocodingRequestParameters
   */
  housenumber?: string;
  /**
   *
   * A key uniquely identifying a physical location.
   *
   * Each record in a geocode response contains a location Id.
   *
   * Use the Id to retrieve the exact same location information.
   *
   * For example, the location Id for "1 Market Street, 94105 San Francisco" is NT_NVpegjQLOBQa8ORYk3jV7A_xA.
   *
   * @type {string}
   * @memberof GeocodingRequestParameters
   */
  locationid?: string;
  /**
   *
   * Specify the map coordinates of the app's viewport.
   *
   * The mapview is specified by two latitude / longitude pairs.
   *
   * the first pair defines the top left corner of the bounding box, the second set the lower right.
   *
   * Matches from within the set map view plus an extended area are ranked highest.
   *
   * Relevant global results are also returned.
   *
   * @type {string}
   * @memberof GeocodingRequestParameters
   * @example mapview=41.9085286,-87.6762943;41.8682739,-87.6041965
   * @see https://developer.here.com/documentation/geocoder/dev_guide/topics/resource-type-bounding-box.html
   */
  mapview?: string;
  /**
   *
   * Postal code defined by the government of the country
   *
   * @type {string}
   * @memberof GeocodingRequestParameters
   */
  postalcode?: string;
  /**
   *
   * searchtext contains free-form text containing address elements.
   *
   * You can specify the searchtext parameter by itself, or you can specify it with other parameters to narrow your search.
   *
   * For example, you can specify the state or country parameters along with a free-form address in the search text field.
   *
   * Note: The search text should not include non-address related elements in order to improve the relevance of results.
   * Non-address elements in search texts can affect the quality of the results.
   *
   * @type {string}
   * @memberof GeocodingRequestParameters
   * @see https://developer.here.com/documentation/geocoder/dev_guide/topics/resource-type-proximity.html
   */
  searchtext?: string;
  /**
   *
   * First subdivision level below the country.
   *
   * Specify state using full or abbreviated notation.
   *
   * A country specific mapping is required
   *
   * @type {string}
   * @memberof GeocodingRequestParameters
   * @example US: State
   * @example Germany: Bundeslan
   */
  state?: string;
  /**
   *
   * The street name can include suite, apt and floor information.
   *
   * When searching for a street intersection two formats are supported:
   * either using two parameters street0, street1 or concatenating the two streets using one of the predefined separators ("and", "at", "&", or "@")
   *
   * @type {string}
   * @memberof GeocodingRequestParameters
   * @example street0=McAllister+St&street1=Market+StCopy
   * @example example:street=McAllister+St+@+Market+St
   */
  steet?: string;
}

/**
 * Submit an address to request the corresponding geocoordinates.
 *
 * Addresses may use structured input or free-form search strings with complete or partial address information.
 *
 * The more detailed the address you submit, the higher the potential match accuracy.
 */
const useForwardGeocoding = () =>
  useAxios<ForwardGeocodingRequestParameters, ForwardGeocodingResponse>({
    domains: {
      apiKey: 'https://geocoder.ls.hereapi.com/6.2/geocode.json',
      appCode: 'https://geocoder.api.here.com/6.2/geocode.json',
    },
  });

export default useForwardGeocoding;
