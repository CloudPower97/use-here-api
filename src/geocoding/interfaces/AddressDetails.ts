export default interface AddressDetails {
  /**
   * ISO 3166-alpha-3 country code
   *
   * @type {string}
   * @memberof AddressDetails
   */
  countryCode: string;
  /**
   * Country name together with the language information
   *
   * @type {string}
   * @memberof AddressDetails
   */
  country: string;
  /**
   * State name together with the language information
   *
   * @type {string}
   * @memberof AddressDetails
   */
  state: string;
  /**
   * County name together with the language information
   *
   * @type {string}
   * @memberof AddressDetails
   */
  county: string;
  /**
   * City name together with the language information
   *
   * @type {string}
   * @memberof AddressDetails
   */
  city: string;
  /**
   * District name together with the language information
   *
   * @type {string}
   * @memberof AddressDetails
   */
  district: string;
  /**
   * Street name together with the language information
   *
   * @type {string}
   * @memberof AddressDetails
   */
  street: string;
  /**
   * Street name decomposed into the different name parts
   *
   * @type {string}
   * @memberof AddressDetails
   */
  streetDetails: string;
  /**
   * House number together with the language information (if available)
   *
   * @type {string}
   * @memberof AddressDetails
   */
  houseNumber: string;
  /**
   * Postal code
   *
   * @type {string}
   * @memberof AddressDetails
   */
  postalCode: string;
  /**
   * Building name together with the language information
   *
   * @type {string}
   * @memberof AddressDetails
   */
  building: string;
}
