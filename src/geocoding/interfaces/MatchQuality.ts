/**
 * MatchQuality provides detailed information about the match quality of a result at attribute level.
 *
 * Match quality is a value between 0.0 and 1.0. 1.0 represents a 100% match
 */
export default interface MatchQuality {
  /**
   *
   * Country	Match quality of the result with respect to country information in the request.
   *
   * @type {number}
   * @memberof MatchQuality
   */
  country: number;
  /**
   * State	Match quality of the result with respect to state information in the request.
   *
   * @type {number}
   * @memberof MatchQuality
   */
  state: number;
  /**
   *
   * County	Match quality of the result with respect to county information in the request.
   *
   * @type {number}
   * @memberof MatchQuality
   */
  county: number;
  /**
   *City	Match quality of the result with respect to city information in the request.
   *
   * @type {number}
   * @memberof MatchQuality
   */
  city: number;
  /**
   *
   * District	Match quality of the result with respect to district information in the request.
   *
   * @type {number}
   * @memberof MatchQuality
   */
  district: number;
  /**
   *
   * Subdistrict	Match quality of the result with respect to sub-district information in the request.
   *
   * @type {number}
   * @memberof MatchQuality
   */
  subdistrict: number;
  /**
   *
   * Street	Match quality of the result with respect to street information in the request.
   * There are two values of 'Street' when you specify an intersection.
   *
   * @type {number}
   * @memberof MatchQuality
   */
  street: number;
  /**
   * HouseNumber Match quality of the result with respect to house number information in the request.
   *
   * @type {number}
   * @memberof MatchQuality
   */
  houseNumber: number;
  /**
   *
   * PostalCode	Match quality of the result with respect to postal code information in the request.
   *
   * @type {number}
   * @memberof MatchQuality
   */
  postalCode: number;
  /**
   *
   * Building	Match quality of the result with respect to building information in the request.
   *
   * @type {number}
   * @memberof MatchQuality
   */
  building: number;
}
