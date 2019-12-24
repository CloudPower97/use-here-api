import AddressAttributes from './AddressAttributes';
import MatchQuality from './MatchQuality';
import ParsedRequest from './ParsedRequest';
import Location from './Location';
export default interface SearchResult {
  /**
   *
   * Indicates the relevance of the results found; the higher the score the more relevant the alternative.
   *
   * The score is a normalized value between 0 and 1.
   *
   * @type {number}
   * @memberof SearchResult
   */
  relevance: number;
  /**
   * Distance between the identified location object and the specified client position in meters.
   * Only provided if a proximity was specified in the request (parameter prox).
   *
   * For areas like admin or landmark areas the distance is defined as the distance between the input coordinate and the boundary of the area.
   *
   * If the area covers the input coordinate the distance will be negative.
   *
   * Note: With gen<6 the distance for admin area results is calculated from the given point to the center of the area.
   */
  distance?: number;
  /**
   *
   * Direction of the location object seen from the specified client position measured clockwise in degrees starting with 0 at true north.
   *
   * Currently only provided for Reverse Geocode mode=retrieveAreas results.
   *
   * It is the direction from the specified client position to the center of the area
   *
   * @type {number}
   * @memberof SearchResult
   */
  direction?: number;
  /**
   * The most detailed address field that matches the geocoding or reverse geocoding query.
   * Enumeration [country, state, county, city, district, street, intersection, houseNumber, postalCode, landmark].
   *
   * intersection is only supported with gen >= 1;
   * for gen<1 requests street is returned for intersection matches
   *
   * @type {(Exclude<
   *         AddressAttributes,
   *         'subdistrict' | 'addressLines' | 'additionalData'
   *       >
   *     | 'intersection'
   *     | 'landmark')}
   * @memberof SearchResult
   */
  matchLevel:
    | Exclude<
        AddressAttributes,
        'subdistrict' | 'addressLines' | 'additionalData'
      >
    | 'intersection'
    | 'landmark';
  /**
   *
   * Detailed information about the match quality on the attribute level.
   *
   * MatchQuality is always 1.0 for reverse geocode results
   *
   * @type {MatchQuality}
   * @memberof SearchResult
   * @see https://developer.here.com/documentation/geocoder/dev_guide/topics/resource-type-response-geocode.html#resource-type-response-geocode__match-quality
   */
  matchQuality: MatchQuality;
  /**
   * Quality of the location match.
   *
   * pointAddress Location matches exactly as Point Address.
   * interpolated Location was interpolated.
   *
   *  With gen<3 address results from reverse geocoding always have MatchType interpolated;
   * only with gen>=3 reverse geocoding returns Point Address results with MatchType pointAddress.
   *
   * @type {('pointAddress' | 'interpolated')}
   * @memberof SearchResult
   */
  matchType?: 'pointAddress' | 'interpolated';
  /**
   * Code indicating how well the result matches the request.
   *
   * Enumeration [exact, ambiguous, upHierarchy, ambiguousUpHierarchy]
   *
   * @type {('exact' | 'ambiguous' | 'upHierarchy' | 'ambiguousUpHierarchy')}
   * @memberof SearchResult
   */
  matchCode?: 'exact' | 'ambiguous' | 'upHierarchy' | 'ambiguousUpHierarchy';
  /**
   * Structured representation of the request which led to the current search result.
   *
   * @type {ParsedRequest}
   * @memberof SearchResult
   * @see https://developer.here.com/documentation/geocoder/dev_guide/topics/resource-type-response-geocode.html#resource-type-response-geocode__parsed-request
   */
  parsedRequest?: ParsedRequest;
  /**
   * The location that was found.
   *
   * @type {Location}
   * @memberof SearchResult
   */
  location: Location;
  /**
   *
   * Generic key/value container to keep additional attributes.
   *
   * The defined key/values are:
   *
   * houseNumberFallback true/false.
   *
   * This attribute is included, if MatchLevel is houseNumber.
   * It is set to false, if Search could find the requested house number. If set to true, it indicates that the requested house number was corrected to match the nearest known house number
   *
   * houseNumberFallbackDifference
   *
   * Difference between the requested house number and the matched house number.
   *
   * This attribute is only included if houseNumberFallback is set to true.
   *
   * houseNumberExtrapolation true/false.
   *
   * An extrapolated address is marked true.
   * House number extrapolation can be activated with an additional data parameter
   *
   * HouseNumberMode, Extrapolation.
   *
   * houseNumberExtrapolationDistance
   *
   * For an extrapolated address, this attribute provides the distance in meters from an existing point or range
   *
   * addresshouseNumberExtrapolationDifference
   *
   * For an extrapolated address, this attribute provides the difference in house numbers from an existing point or range address.
   *
   * Note: Depending on the search scenario, some sub elements might be omitted.
   * @type {*}
   * @memberof SearchResult
   */
  additionalData: {
    houseNumberFallback?: boolean;
    houseNumberFallbackDifference?: any;
    houseNumberExtrapolation?: boolean;
    houseNumberMode?: any;
    houseNUmberExtrapolationDistance?: number;
    addresshouseNumberExtrapolationDifference?: number;
  };
}
