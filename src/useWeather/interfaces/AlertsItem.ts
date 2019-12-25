import TimeSegment from './TimeSegment';

export default interface AlertsItem {
  /**
   * Type of alert.
   *
   * @type {number}
   * @memberof Alerts
   */
  type: number;
  /**
   * Description of the alert.
   *
   * @type {string}
   * @memberof Alerts
   */
  description: string;
  timeSegment: TimeSegment;
}
