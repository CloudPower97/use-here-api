import WeatherItems from './WeatherItems';

export default interface Location {
  /**
   * Weather conditions.
   *
   * Note that this element may have the attributes defined in LocationMetadata.
   *
   * @type {WeatherItems[]}
   * @memberof Location
   */
  observation: WeatherItems[];
}
