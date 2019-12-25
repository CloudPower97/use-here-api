export default interface AlertLocation {
  /**
   * Location code (zone code, county code, province code)
   *
   * @type {string}
   * @memberof AlertLocation
   */
  content: string;
  /**
   * Latitude of location polygon centroid in degrees in WGS 84 format.
   * @type {number}
   * @memberof AlertLocation
   */
  latitude: number;
  /**
   * Longitude of location polygon centroid in degrees in WGS 84 format.
   *
   * @type {number}
   * @memberof AlertLocation
   */
  longitude: number;
  /**
   * Location name.
   *
   * @type {string}
   * @memberof AlertLocation
   */
  name: string;
  /**
   * 2-letters ISO country code.
   *
   * @type {string}
   * @memberof AlertLocation
   */
  country: string;
  /**
   * Full country name.
   *
   * @type {string}
   * @memberof AlertLocation
   */
  countryName: string;
  /**
   * 2-letters US-state abbreviation.
   *
   * @type {string}
   * @memberof AlertLocation
   */
  state: string;
  /**
   * Full US-state name.
   *
   * @type {string}
   * @memberof AlertLocation
   */
  stateName: string;
  /**
   * 2-letters province code. Canada only.
   *
   * @type {string}
   * @memberof AlertLocation
   */
  province?: string;
  /**
   * Full province name. Canada only.
   *
   * @type {string}
   * @memberof AlertLocation
   */
  provinceName?: string;
}
