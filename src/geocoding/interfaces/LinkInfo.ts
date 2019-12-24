import SpeedCategory from './SpeedCategory';
import LinkFlag from './LinkFlag';
import LinkAccessFlag from './LinkAccessFlag';

export default interface LinkInfo {
  /**
   * The functional class is used to classify roads depending on the speed, importance and connectivity of the road.
   *
   * @type {string}
   * @memberof LinkInfo
   */
  functionalClass: string;
  /**
   * Cardinal (N, E, S, W) or ordinal direction (NE, SE, SW, NW) for the navigable link following the direction of traffic on the street.
   *
   * If traffic is allowed in both directions two values will be returned.
   *
   * If the request contained a bearing parameter, then the first entry will match the returned direction.
   *
   * @type {string}
   * @memberof LinkInfo
   */
  travelDirection: string;
  /**
   * Classifies the general speed trend of a navigable link based on posted or legal speed.
   *
   * @type {SpeedCategory}
   * @memberof LinkInfo
   * @see SpeedCategoryType enumeration for possible values
   */
  speedCategory: SpeedCategory;
  /**
   * A structure that lists all TMC codes and the free flow speed. If the request contained a bearing parameter, then the TMC codes will match the directions in the "TravelDirection" response field.
   *
   * A Free-flow speed is the speed at which traffic would be traveling at on a road segment when conditions are good (e.g., no rain or snow) and when traffic is not congested.
   *
   * @type {*}
   * @memberof LinkInfo
   */
  traffic: any;
  /**
   * Flags that describe special characteristics of the link like Motorway, Tollroad, Paved, etc.
   *
   * @type {LinkFlag}
   * @memberof LinkInfo
   * @see LinkFlagType enumeration for possible values
   */
  linkFlags: LinkFlag;
  /**
   * Flags that describe access characteristics of the link like Automobiles, Buses, Pedestrians, etc.
   *
   * @type {LinkAccessFlag}
   * @memberof LinkInfo
   * @see LinkAccessFlagType enumeration for possible values
   */
  accessFlags: LinkAccessFlag;
}
