import AlertsItems from './AlertsItem';

export default interface Alerts {
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
