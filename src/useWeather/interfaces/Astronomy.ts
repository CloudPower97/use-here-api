import LocationMetadata from './LocationMetadata';
import AstronomyItems from './AstronomyItems';

export default interface Astronomy extends Partial<LocationMetadata> {
  /**
   * Astronomy location.
   *
   * Note that this element may have the attributes defined in LocationMetadata.
   *
   * @type {AstronomyItems[]}
   * @memberof Astronomy
   */
  astronomy: AstronomyItems[];
}
