import WeatherItems from './WeatherItems';
import LocationMetadata from './LocationMetadata';

export default interface ForecastLocation extends Partial<LocationMetadata> {
  /**
   * Weather forecast information.
   *
   * Note that this element may have the attributes defined in LocationMetadata.
   *
   * @type {WeatherItems[]}
   * @memberof ForecastLocation
   */
  forecast: WeatherItems[];
}
