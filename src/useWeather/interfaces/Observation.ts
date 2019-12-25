import LocationMetadata from './LocationMetadata';
import WeatherItems from './WeatherItems';

interface LocationArray extends Partial<LocationMetadata> {
  observation: WeatherItems[];
}

export default interface Observation {
  /**
   * Report location.
   *
   * Note that this element may have the attributes defined in LocationMetadata.
   *
   * @type {{
   *     observation: WeatherItems[];
   *   }}
   * @memberof Observation
   */
  location: LocationArray[];
}
