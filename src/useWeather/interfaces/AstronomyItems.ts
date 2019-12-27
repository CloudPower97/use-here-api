import LocationMetadata from './LocationMetadata';

export default interface AstronomyItems extends Partial<LocationMetadata> {
  /**
   * Time when the Sun rises.
   *
   * @type {string}
   * @memberof AstronomyItems
   */
  sunrise: string;
  /**
   * Time when the Sun sets.
   *
   * @type {string}
   * @memberof AstronomyItems
   */
  sunset: string;
  /**
   * Time when the Moon rises.
   *
   * @type {string}
   * @memberof AstronomyItems
   */
  moonrise: string;
  /**
   * Time when the Moon sets.
   *
   * @type {string}
   * @memberof AstronomyItems
   */
  moonset: string;
  /**
   * Phase of the moon.
   *
   * @type {number}
   * @memberof AstronomyItems
   */
  moonPhase: number;
  /**
   * Description of the phase of the moon.
   *
   * @type {string}
   * @memberof AstronomyItems
   */
  moonPhaseDesc: string;
  /**
   * Name of the icon from the reporting service.
   *
   * @type {string}
   * @memberof AstronomyItems
   */
  iconName: string;
}
