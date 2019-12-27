import AlertLocation from './AlertLocation';

export default interface NWSAlertItems {
  /**
   * Type of alert.
   *
   * @type {number}
   * @memberof NWSAlertItems
   */
  type: number;
  /**
   * Description of the alert.
   *
   * @type {string}
   * @memberof NWSAlertItems
   */
  description: string;
  /**
   * The severity of alerts from 1-100 with 1 being the most severe.
   *
   * @type {number}
   * @memberof NWSAlertItems
   */
  severity: number;
  /**
   * The warning or watch text is a long string of words describing the warning or watch in detail.
   *
   * @type {string}
   * @memberof NWSAlertItems
   */
  message: string;
  /**
   * List of zones included with the alert.
   *
   * US only.
   *
   * @type {AlertLocation}
   * @memberof NWSAlertItems
   */
  zone?: AlertLocation;
  /**
   * List of counties included with the alert.
   *
   * US only.
   *
   * @type {AlertLocation}
   * @memberof NWSAlertItems
   */
  county?: AlertLocation;
  /**
   * List of locations included with the alert.
   *
   * Canada only
   *
   * @type {AlertLocation}
   * @memberof NWSAlertItems
   */
  location?: AlertLocation;
  /**
   * Date and time at the location the alert was issued by National Weather Service.
   *
   * The format is either YYYY-MM-DDThh:mm:ss + the timezone offset, unless the forecast is for a location in the UTC zone, in which the date and time is terminated by a Z.
   *
   * @type {string}
   * @memberof NWSAlertItems
   */
  validFromTimeLocal: string;
  /**
   * Alert expiration date and time at the location.
   *
   * The format is either YYYY-MM-DDThh:mm:ss + the timezone offset, unless the forecast is for a location in the UTC zone, in which the date and time is terminated by a Z.
   *
   * @type {string}
   * @memberof NWSAlertItems
   */
  validUntilTimeLocal: string;
  /**
   * Latitude of location polygon centroid in degrees in WGS 84 format.
   *
   * @type {number}
   * @memberof NWSAlertItems
   */
  latitude: number;
  /**
   * Longitude of location polygon centroid in degrees in WGS 84 format.
   *
   * @type {number}
   * @memberof NWSAlertItems
   */
  longitude: number;
  /**
   * Location name.
   *
   * @type {string}
   * @memberof NWSAlertItems
   */
  name: string;
  /**
   * Country name.
   *
   * @type {string}
   * @memberof NWSAlertItems
   */
  country: string;
  /**
   * US-state name.
   *
   * @type {string}
   * @memberof NWSAlertItems
   */
  state: string;
}
