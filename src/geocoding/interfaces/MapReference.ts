export default interface MapReference {
  /**
   * PVID of the arrival link to represent the drive-to location.
   *
   * @type {string}
   * @memberof MapReference
   */
  referenceId: string;
  /**
   * Version of the map schema. Format: QQ/YYYY, e.g. Q1/2015
   *
   * @type {string}
   * @memberof MapReference
   */
  mapVersion: string;
  /**
   * Release date of the map data. Format: YYYY-MM-DD
   *
   * @type {string}
   * @memberof MapReference
   */
  mapReleaseDate: string;
  /**
   * Map :version details (DVN) containing the base line for the map schema and an identifier for the weekly or quarterly update.
   * Format: <4-letter region>YYQ<weekly update>
   *
   * @type {string}
   * @memberof MapReference
   * @example NAAM15135 (region: North America (NAAM), map schema: Q1/2015 (151), weekly update 35)
   */
  mapId: string;
  /**
   * Relative position of the location along the link. Spot is defined as the fractional distance from the link's reference-node to the non-reference node, i.e. the value range is between 0 and 1.
   *
   * This attribute is only relevant if a link is referenced.
   *
   * @type {string}
   * @memberof MapReference
   */
  spot?: string;
  /**
   * Indicates whether the referenced location is on the left or right side of the link (if heading from the reference node to the non-reference node).
   *
   * Enumeration [left, right, neither].
   *
   * @type {string}
   * @memberof MapReference
   */
  sideOfStreet: 'left' | 'right' | 'neither';
  /**
   * PVID of the country admin area.
   *
   * @type {string}
   * @memberof MapReference
   */
  countryId: string;
  /**
   * PVID of the state admin area.
   *
   * @type {string}
   * @memberof MapReference
   */
  stateId: string;
  /**
   * PVID of the county admin area.
   *
   * @type {string}
   * @memberof MapReference
   */
  countyId: string;
  /**
   * PVID of the city admin area.
   *
   * @type {string}
   * @memberof MapReference
   */
  cityId: string;
  /**
   * PVID of the district admin area.
   *
   * @type {string}
   * @memberof MapReference
   */
  districtId: string;
  /**
   * PVID of the road link with which the Point Address is associated.
   *
   * Only available for results with matchLevel houseNumber and matchType pointAddress.
   *
   * Not available for interpolated results, except for Interpolated/Estimated Point Addresses.
   *
   * The Road Link is used to retrieve the Street Name, Administrative, Postal, and Zone coding for the Point Address.
   *
   * @type {string}
   * @memberof MapReference
   */
  roadLinkId?: string;
  /**
   * External reference to additional building information (currently for internal use only)
   *
   * @type {string}
   * @memberof MapReference
   */
  buildingId?: string;
  /**
   * PVID of the Point Address.
   *
   * Only available for results with matchLevel houseNumber and matchType pointAddress.
   *
   * Not available for interpolated results, except for Interpolated/Estimated Point Addresses.
   *
   * @type {string}
   * @memberof MapReference
   */
  addressId?: string;
}
