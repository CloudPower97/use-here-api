export default interface RelatedLocation {
  /**
   * 	The type of the relationship to the associated location. The following types of related locations are supported:
   *
   * nearByDistanceMarker
   *
   * Location of a nearby distance marker on the highway.
   * Retrieving distance markers is supported for the Reverse Geocoding mode retrieveAddresses and is enabled by the flag &additionaldata=IncludeDistanceMarkers,true
   *
   *
   * nearByAddress
   *
   * Location of a nearby address on the same link.
   * Retrieving nearby addresses is supported for the Reverse Geocoding mode trackPosition and is enabled by the flag &locationattributes=related.nearByAddress
   *
   * microPointAddress
   *
   * Location of a secondary address for a point address. Retrieving micro point unit addresses is supported for the Forward Geocoding mode and is enabled by the flag &additionaldata=IncludeMicroPointAddresses,true
   *
   * @type {*}
   * @memberof RelatedLocation
   */
  type: any;
  /**
   * Relevant for nearByAddress relations.
   *
   * Information about the quality of the related location match.
   *
   * pointAddress Related location is based on a Point Address.
   *
   * interpolated Related location was interpolated.
   *
   * @type {*}
   * @memberof RelatedLocation
   */
  matchType: any;
  /**
   * Distance to the associated location.
   *
   * The distance is calculated based on the underlying road geometry.
   *
   * @type {*}
   * @memberof RelatedLocation
   */
  routeDistance: any;
  /**
   * Relevant for nearByAddress relations.
   *
   * Bearing (measured clockwise from true north) from the projected coordinate on the street to the display position of the related location.
   *
   * @type {*}
   * @memberof RelatedLocation
   */
  direction: any;
  /**
   * Associated location.
   *
   * For a nearByDistanceMarker relation this is the location of the reference Distance Marker(s).
   *
   * For a nearByAddress relation this is the location of the closest house on the link.
   *
   * For a microPointAddress this contains details about the micro point unit.
   *
   * @type {*}
   * @memberof RelatedLocation
   */
  location: any;
}
