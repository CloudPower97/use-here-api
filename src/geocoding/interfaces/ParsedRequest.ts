export default interface ParsedRequest {
  /**
   * Input token(s) the parser has categorized as the name of a landmark.
   *
   * @type {string}
   * @memberof ParsedRequest
   */
  name: string;
  /**
   * Assembled address value built out of the parsed address components.
   *
   * @type {string}
   * @memberof ParsedRequest
   */
  label: string;
  /**
   * Input token(s) the parser has categorized as the country part of an address.
   *
   * @type {string}
   * @memberof ParsedRequest
   */
  country: string;
  /**
   * Input token(s) the parser has categorized as the state part of an address.
   *
   * @type {string}
   * @memberof ParsedRequest
   */
  state: string;
  /**
   * Input token(s) the parser has categorized as the county part of an address.
   *
   * @type {string}
   * @memberof ParsedRequest
   */
  county: string;
  /**
   * Input token(s) the parser has categorized as the city part of an address.
   *
   * @type {string}
   * @memberof ParsedRequest
   */
  city: string;
  /**
   * Input token(s) the parser has categorized as the district part of an address.
   *
   * @type {string}
   * @memberof ParsedRequest
   */
  district: string;
  /**
   * Input token(s) the parser has categorized as the sub-district part of an address.
   *
   * @type {string}
   * @memberof ParsedRequest
   */
  subdistrict: string;
  /**
   * Input token(s) the parser has categorized as the street part of an address (including intersections which are defined by two streets).
   *
   * @type {string}
   * @memberof ParsedRequest
   */
  street: string;
  /**
   * Input token(s) the parser has categorized as the house number part of an address.
   *
   * @type {string}
   * @memberof ParsedRequest
   */
  houseNumber: string;
  /**
   * Input token(s) the parser has categorized as the postal code part of an address.
   *
   * @type {string}
   * @memberof ParsedRequest
   */
  postalCode: string;
  /**
   * Input token(s) the parser has categorized as the building part of an address.
   *
   * @type {string}
   * @memberof ParsedRequest
   */
  building: string;
  /**
   * Formatted address lines built out of the parsed address components.
   * The first line consists of street name, including prefix, directional and street type, and house number.
   * The second line consists of the city name and postal code, plus in some countries the state name or abbreviation.
   *
   * These elements are only populated if the MatchLevel is street or better.
   * A city match does not contain address lines.
   *
   * @type {string}
   * @memberof ParsedRequest
   */
  addressLine?: string;
  /**
   * Secondary address units as defined by the US Postal Service can be recognized and returned if the PreserveUnitDesignators switch was set to true in the SearchRequest additionalData field. 
   * Recognized address units are returned in the AdditionalData field, where the designator is the key and the unit value is the value of the entry:
   * APT recognized value of unit type Apartment
   * BLDG recognized value of unit type Building
   * FL recognized value of unit type Floor
   * STE recognized value of unit type Suite
   * UNIT recognized value of unit type Unit
   * DEPT recognized value of unit type Department
   * UnknownUnit unrecognized address unit value, which is usually printed with a pound (#) sign

   *
   * @type {*}
   * @memberof ParsedRequest
   */
  additionalData?: any;
}
