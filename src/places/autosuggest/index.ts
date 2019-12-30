import useAxios from '../../useAxios';
import RepresentationModifiers from '../RepresentationModifiers';
import AutosuggestPlace from './AutosuggestPlace';
import AutosuggestQueryCompletion from './AutosuggestQueryCompletion';
import AutosuggestSearch from './AutosuggestSearch';

interface PlacesAutosuggestRequestParameters
  extends Partial<RepresentationModifiers> {
  /**
   * Coordinates of search location expressed as latitude, longitude.
   *
   * Additional parameters can be passed which provide more context such as the uncertainty and how the coordinates were generated.
   *
   * For a full description, see the Location Contexts documentation.
   *
   * @type {string}
   * @memberof PlacesAutosuggestRequestParameters
   * @see https://developer.here.com/documentation/places/dev_guide/topics/location-contexts.html for a full description
   * @example at=52.5304417,13.4111201
   * @example at=52.5304417,13.4111201;cgen=gps;u=100
   * @example at=52.5304417,13.4111201;u=100
   */
  at: string;
  /**
   * Plain-text search term. For example, "restaurant" or "Brandenburger Tor"
   *
   * @type {string}
   * @memberof PlacesAutosuggestRequestParameters
   */
  q: string;
  /**
   * This parameter limits results to the boundary of the specified area. The search area can be expressed as:
   *
   * circle specified as a centre point with latitude and longitude; and a radius around that point. Format: latitude,longitude;r=\\d+(\\.\\d+)?[;cgen=(map|gps|sgps)][;u=\\d+]
   * bounding box specified as 4 values, denoting west longitude, south latitude, east longitude, north latitude.
   *
   * @type {string}
   * @memberof PlacesAutosuggestRequestParameters
   * @see https://developer.here.com/documentation/places/dev_guide/topics/location-contexts.html for a full description
   */
  in?: string;
  /**
   * This parameter limits search results to the boundary of an area around a route. A route consists of a start coordinate, 0..n turning coordinates and an end coordinate. An optional width in meters can be passed to provide off the route max distance in meters, default: 1000m
   *
   * The points should describe the geometric shape of the route with high precision. Especially, it’s usually not sufficient to only pass maneuvre points as they would be shown to the driver.
   *
   * width specifier is CW or HW. It can follow any of the points to specify whether a route segment is located in a city or on a highway respectively, where segment is the point preceding specifier and following points till the next specifier. This will modify the search distance and possibly algorithm for the segment. DW will reset to default width (specified by w=\d+ ) and algorithm.
   *
   * There are practical limitations to URL lengths. Thus, route parameters with more than 4700 characters will be rejected.
   *
   * A way to reduce this parameter's length is to use a more space-efficient HERE polyline encoding and supply that as the compressedRoute parameter.
   *
   * @type {string}
   * @memberof PlacesAutosuggestRequestParameters
   */
  route?: string;
  /**
   * This parameter is the new preferred way to specify a route.
   *
   * It contains the coordinates in HERE polyline encoding, which is basically a URL-safe version of Google's polyline encoding format.
   *
   * Additionally, it may contain width attributes for individual parts of the route, i.e. one specify segments to have city width (.C), highway width (.H), or default width (.D).
   *
   * By supplying the suffix ';w=\d+', one can define the actual width of the default width segments in meters.
   *
   * @type {string}
   * @memberof PlacesAutosuggestRequestParameters
   */
  compressedRoute?: string;
  /**
   * A comma-separated list of the autosuggest result types that should be included in the response.
   *
   * Possible values are: address, place, category, chain.
   *
   * If this parameter is not set, all autosuggest types are considered for the response.
   *
   * @type {string}
   * @memberof PlacesAutosuggestRequestParameters
   */
  result_types?: 'address' | 'place' | 'category' | 'chain';
  /**
   * The delimiter that should be placed before each matched token in the autosuggest response.
   *
   * It defaults to</b>.
   *
   * The delimiters are included in the 'highlightedTitle' and 'highlightedVicinity' fields.
   *
   * @type {string}
   * @memberof PlacesAutosuggestRequestParameters
   * @example <b>
   */
  hlStart?: string;
  /**
   * The delimiter that should be placed after each matched token in the autosuggest response.
   *
   * It defaults to </b>.
   *
   * The delimiters are included in the 'highlightedTitle' and 'highlightedVicinity' fields.
   *
   * @type {string}
   * @memberof PlacesAutosuggestRequestParameters
   * @default </b>
   */
  hlEnd?: string;
  /**
   * Defines constraints used to filter results based on their address. Its value is a semicolon-separated list of key-value pairs. Each value can contain multiple options separated by a comma.
   *
   * Key and value are separated by the equals sign. KeyValuePairType := [Key]=[Value]
   *
   * Supported keys: countryCode (ISO 3166-1-alpha-3), stateCode, county, district, city, zipCode
   *
   * @type {string}
   * @memberof PlacesAutosuggestRequestParameters
   * @example city=berlin,potsdam
   */
  addressFilter?: 'stateCode' | 'county' | 'district' | 'city' | 'zipCode';
  /**
   * For some endpoints, queries that describe recentering can be used.
   *
   * For example, if the search query is "Restaurants in München", then a recenter is inferred, and the implied search center is München.
   *
   * When this happens, a special result precedes the rest of the result items and describes the fact that a new search center was detected.
   *
   * This parameter determines how distances to the returned results are reported.
   *
   * When the "recd" parameter is set to true, distances returned in the search results are calculated from the detected search center.
   *
   * When false, the distances are reported from the provided search center only.
   *
   * This parameter does not affect search results in any other way.
   *
   * @type {boolean}
   * @memberof PlacesAutosuggestRequestParameters
   */
  recd?: boolean;
  /**
   *
   * This parameter is useful when search of interesting places along the route is performed and route parameter is specified.
   *
   * There are two different ways of calculating distance along a route.
   *
   * The first way is to compute distance from where you are, along the route, and then perpendicular to the route.
   *
   * The second is to compute distance as the amount of extra travel needed to include the point in the route.
   *
   * The "urgency" parameter allows you to choose between the two, or choose a blending of the two.
   *
   * A value of 1.0 selects for distance along the route, and a value of 0.0 selects the amount of extra travel needed.
   *
   * Values in between weight each method correspondingly.
   *
   * @type {number}
   * @memberof PlacesAutosuggestRequestParameters
   * @default 1.0
   */
  urgency?: number;
}

interface PlacesAutosuggestResponse {
  results: (
    | AutosuggestPlace
    | AutosuggestQueryCompletion
    | AutosuggestSearch
  )[];
}

/**
 * Provides you a lists of suggested search terms, instants results and refined search links related to a given (partial) search term and location context.
 * This is used to help users save time, iterate on their searches, and get the results.
 */
const usePlacesAutosuggest = () =>
  useAxios<PlacesAutosuggestRequestParameters, PlacesAutosuggestResponse>({
    domains: {
      apiKey: 'https://places.ls.hereapi.com/places/v1/autosuggest',
      appCode: 'https://places.api.here.com/places/v1/autosuggest',
    },
  });

export default usePlacesAutosuggest;
