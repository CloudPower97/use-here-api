export default interface Address {
  /**
   * Assembled address value for displaying purposes.
   *
   * @type {string}
   * @memberof Address
   */
  label: string;
  /**
   * ISO 3166-alpha-3 country code
   *
   * @type {string}
   * @memberof Address
   */
  country: string;
  /**
   * Includes the first subdivision level below the country.
   * Where commonly used, this is a state code such as CA for California.
   *
   * @type {string}
   * @memberof Address
   */
  state: string;
  /**
   * Includes the second subdivision level below the country.
   * Use of this field is optional if a second subdivision level is not available.
   *
   * @type {string}
   * @memberof Address
   */
  county: string;
  /**
   * Refers to the locality of the address.
   *
   * @type {string}
   * @memberof Address
   */
  city: string;
  /**
   * Includes the subdivision level below the city.
   * Use of this field is optional if a second subdivision level is not available.
   *
   * @type {string}
   * @memberof Address
   */
  district: string;
  /**
   * Includes the subdivision level below the district.
   * This field is currently only used for India results.
   *
   * In India, it is typical to use the names of areas below district level in addressing.
   *
   * @type {string}
   * @memberof Address
   */
  subdistrict: string;
  /**
   * Refers to the street name.
   *
   * @type {string}
   * @memberof Address
   */
  street: string;
  /**
   * House number. Depending on regional characteristics, can also be house name.
   *
   * @type {number}
   * @memberof Address
   */
  houseNumber: number;
  /**
   * Postal code
   *
   * @type {number}
   * @memberof Address
   */
  postalCode: number;
  /**
   * Building name.
   *
   * Building names are currently only supported for Hong Kong addresses.
   *
   * @type {string}
   * @memberof Address
   */
  building?: string;
  /**
   * Distance marker information for this location.
   * Only populated when explicitly requested with additionaldata=IncludeDistanceMarkers,true.
   *
   * @type {string}
   * @memberof Address
   */
  distanceMarker?: string;
  /**
   * Formatted address lines.
   *
   * The first line consists of street name (including pre-fix, directional, street type) and house number.
   * The second line consists of the city name and postal code plus in some countries the state name or abbreviation.
   *
   * These elements are only populated if MatchLevel is street or better.
   *
   * @type {string}
   * @memberof Address
   */
  addressLine?: string;
  /**
   * Generic key/value container to keep additional attributes.
   *
   * The defined key/values are:
   * "CrossingStreet0" First cross street near matched address
   * "CrossingStreet1" Second cross street near matched address. This value is omitted by the search module, if the location's distance to CrossingStreet0 is less than half of the distance to CrossingStreet1.
   * "CountryName" Non-abbreviated, full name of the country.
   * "StateName" Non-abbreviated, full name of the state.
   * "CountyName" Non-abbreviated, full name of the county.
   * "Country2" If requested by passing &additionaldata=Country2,true, this field provides the ISO-3166 alpha-2 country code. By default, two-letter codes are not returned.
   *
   * Secondary address units as defined by the US Postal Service can be recognized and returned if the PreserveUnitDesignators switch was set to true in SearchRequest.additionalData. Recognized address units are returned in the AdditionalData field, where the designator is the key and the unit value is the value of the entry:
   * "APT" - recognized value of unit type "Apartment"
   * "BLDG" - recognized value of unit type "Building"
   * "FL" - recognized value of unit type "Floor"
   * "STE" - recognized value of unit type "Suite"
   * "UNIT" - recognized value of unit type "Unit"
   * "RM" - recognized value of unit type "Room"
   * "DEPT" - recognized value of unit type "Department"
   * "UnknownUnit" - unrecognized address unit value, which is usually printed with a pound ("#") sign.
   *
   * "PostalCodeType" For the USA, the Geocoder result shows supplementary information that describes the type of the 5-Digit ZIP, as according to the USPS. The values are as follows:
   * "N" = Non-Unique
   * "M" = Military
   * "P" = PO Box
   * "U" = Unique Zip
   *
   * @type {{
   *     value: string;
   *     key: string;
   *   }[]}
   * @memberof Address
   */
  additionalData: {
    value: string;
    key: string;
  }[];
}
