import AlertsItems from './AlertsItem';
import LocationMetadata from './LocationMetadata';

export default interface Alerts extends Partial<LocationMetadata> {
  /**
   * Alert issued for location.
   *
   * Note that this element may have the attributes defined in LocationMetadata.
   *
   * @type {AlertsItems[]}
   * @memberof Alerts
   */
  alerts: AlertsItems[];
}
