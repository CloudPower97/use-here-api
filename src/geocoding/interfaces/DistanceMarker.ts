export default interface DistanceMarker {
  /**
   * Distance Marker value
   *
   * @type {number}
   * @memberof DistanceMarker
   */
  value: number;
  /**
   * Distance in the local units along the highway from the lowest Distance Marker nearest to the matched position on the road.
   *
   * @type {number}
   * @memberof DistanceMarker
   */
  offset: number;
  /**
   * Local unit of measure used for the offset, either mi or km.
   *
   * @type {('mi' | 'km')}
   * @memberof DistanceMarker
   */
  unit: 'mi' | 'km';
  /**
   * The direction given on the highway signs (if available)
   *
   * @type {*}
   * @memberof DistanceMarker
   */
  directionOnSign?: any;
}
