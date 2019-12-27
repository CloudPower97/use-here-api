export default interface LocationMetadata {
  /**
   * Location ID.
   *
   * @type {string}
   * @memberof LocationMetadata
   */
  id: string;
  /**
   * Location country name.
   *
   * @type {string}
   * @memberof LocationMetadata
   */
  country: string;
  /**
   * Location state name.
   *
   * @type {string}
   * @memberof LocationMetadata
   */
  state: string;
  /**
   * Location city name.
   *
   * @type {string}
   * @memberof LocationMetadata
   */
  city: string;
  /**
   * Latitude in degrees in WGS 84 format.
   *
   * @type {number}
   * @memberof LocationMetadata
   */
  latitude: number;
  /**
   * Longitude in degrees in WGS 84 format.
   *
   * @type {number}
   * @memberof LocationMetadata
   */
  longitude: number;
  /**
   * Elevation in meters.
   *
   * @type {number}
   * @memberof LocationMetadata
   */
  elevation: number;
  /**
   * Air distance between the location in the response and the specified location in km.
   *
   * @type {number}
   * @memberof LocationMetadata
   */
  distance: number;
  /**
   * Weekday number 1 through 7, where 1 indicates Sunday.
   *
   * If the element is in the response and it contains a value, there is an Integer in the String.
   *
   * If the element is in the response and it does not contain a value, the value is "".
   *
   * @type {string}
   * @memberof LocationMetadata
   */
  dayOfWeek: string;
  /**
   * Name of day.
   *
   * @type {string}
   * @memberof LocationMetadata
   */
  weekDay: string;
  /**
   * Date and time the forecast was issued. The format is either YYYY-MM-DDThh:mm:ss + the timezone offset, unless the forecast is for a location in the UTC zone, in which the date and time is terminated by a Z.
   *
   * Note: If daylight saving time is in effect for a specified location, times will be adjusted for daylight savings time.
   *
   * @type {string}
   * @memberof LocationMetadata
   */
  utcTime: string;
  /**
   * Local time, for example, 0701312013, which is hour 7 of 2013-01-31.
   *
   * @type {string}
   * @memberof LocationMetadata
   */
  localTime: string;
  /**
   * Local time format.
   *
   * The format is HHMMddyyyy.
   *
   * @type {string}
   * @memberof LocationMetadata
   */
  localTimeFormat: string;
  /**
   * Location timezone as an offset from Greenwich Mean Time (GMT/UTC).
   *
   * Note: Daylight saving time is not accounted for.
   *
   * @type {number}
   * @memberof LocationMetadata
   */
  timezone: number;
}
