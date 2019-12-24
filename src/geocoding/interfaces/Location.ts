import Address from './Address';
import AddressDetails from './AddressDetails';
import AddressNames from './AddressNames';
import MapReference from './MapReference';
import LinkInfo from './LinkInfo';
import RelatedLocation from './RelatedLocation';

export default interface Location {
  /**
   * A key uniquely identifying a physical location.
   *
   * @type {string}
   * @memberof Location
   */
  locationId: string;
  /**
   * Indicates the type of the location.
   * The following types are supported:
   * area
   * address
   * trail
   * park
   * lake
   * mountainPeak
   * volcano
   * river
   * golfCourse
   * industrialComplex
   * island
   * woodland
   * cemetery
   * canalWaterChannel
   * bayHarbor
   * airport
   * hospital
   * sportsComplex
   * shoppingCentre
   * universityCollege
   * nativeAmericanReservation
   * railroad
   * militaryBase
   * parkingLot
   * parkingGarage
   * animalPark
   * beach
   * distanceMarker
   *
   * For gen<5 the location type is set to point.
   *
   * @type {string}
   * @memberof Location
   */
  locationType:
    | 'area'
    | 'address'
    | 'trail'
    | 'park'
    | 'lake'
    | 'mountainPeak'
    | 'volcano'
    | 'river'
    | 'golfCourse'
    | 'industrialComplex'
    | 'island'
    | 'woodland'
    | 'cemetery'
    | 'canalWaterChannel'
    | 'bayHarbor'
    | 'airport'
    | 'hospital'
    | 'sportsComplex'
    | 'shoppingCentre'
    | 'universityCollege'
    | 'nativeAmericanReservation'
    | 'railroad'
    | 'militaryBase'
    | 'parkingLot'
    | 'parkingGarage'
    | 'animalPark'
    | 'beach'
    | 'distanceMarker';
  /**
   * The name of a location.
   * This is relevant for landmarks like parks and lakes.
   *
   * @type {string}
   * @memberof Location
   */
  name?: string;
  /**
   * The display position contains the coordinates at which to place a marker indicating the given location on the map.
   *
   * @type {{
   *     latitude: number;
   *     longitude: number;
   *   }}
   * @memberof Location
   */
  displayPosition: {
    latitude: number;
    longitude: number;
  };
  /**
   * A navigation position contains the coordinates of a potential route waypoint.
   * It is used for routes that pass through the given location.
   *
   * @type {[
   *     {
   *       latitude: number;
   *       longitude: number;
   *     }
   *   ]}
   * @memberof Location
   */
  navigationPosition: [
    {
      latitude: number;
      longitude: number;
    }
  ];
  /**
   * Bounding box of the location optimized for display
   *
   * @type {{
   *     topLeft: {
   *       latitude: number;
   *       longitude: number;
   *     };
   *     bottomRight: {
   *       latitude: number;
   *       longitude: number;
   *     };
   *   }}
   * @memberof Location
   */
  mapView: {
    topLeft: {
      latitude: number;
      longitude: number;
    };
    bottomRight: {
      latitude: number;
      longitude: number;
    };
  };
  /**
   * Shape of the location.
   * This is only relevant for areas.
   *
   * @type {string}
   * @memberof Location
   */
  shape?: string;
  /**
   * Address record of a Location.
   * Attributes are normalized to US feature names and can be mapped to the local feature levels (for example, State matches "Bundesland" in Germany) using mapping tables.
   *
   * @type {Address}
   * @memberof Location
   */
  address: Address;
  /**
   * Additional information about the address.
   * The names for address elements are listed together with the language information for this name.
   *
   * @type {AddressDetails}
   * @memberof Location
   */
  addressDetails?: AddressDetails;
  /**
   * Additional information about the address.
   * Address information in all primary languages for bi-lingual regions.
   *
   * Currently limited to Spain.
   *
   * In Spain, some regions have multiple primary languages such as Spanish, Catalan, Basque, or Galician.
   *
   * @type {AddressNames}
   * @memberof Location
   */
  addressNames?: AddressNames;
  /**
   * References to a network link and admin areas of the location object.
   *
   * @type {MapReference}
   * @memberof Location
   */
  mapReference?: MapReference;
  /**
   * The most common map attributes of a navigable link.
   *
   * Only available for link based locations like streets and buildings.
   *
   * @type {LinkInfo}
   * @memberof Location
   */
  linkInfo?: LinkInfo;
  /**
   * List of related locations. The following types of related locations are supported:
   *
   * nearByDistanceMarker
   *
   * Location of a nearby distance marker on the highway.
   * Retrieving distance markers is supported for the Reverse Geocoding mode retrieveAddresses and is enabled by the flag &additionaldata=IncludeDistanceMarkers,true
   *
   * microPointAddress
   *
   * Location of a secondary address for a point address.
   *
   * Retrieving micro point unit addresses is supported for the Forward Geocoding mode and is enabled by the flag &additionaldata=IncludeMicroPointAddresses,true
   *
   * @type {RelatedLocation}
   * @memberof Location
   */
  related?: RelatedLocation;
  /**
   * Generic key/value container to keep additional attributes. The defined key/values are:
   *
   * ExtendedTopLeftLatitude
   *
   * Latitude of the top-left coordinate of the extended bounding box which completely encloses the physical extent of the location.
   *
   * ExtendedTopLeftLongitude
   *
   * Latitude of the top-left coordinate of the extended bounding box
   * ExtendedBottomRightLatitude
   * Latitude of the bottom-left coordinate of the extended bounding box
   * ExtendedBottomRightLongitude
   * Longitude of the bottom-right coordinate of the extended bounding box
   * "additionalAddressProvider"
   * ProviderId if Location data is provided by an external address provider.
   *
   * The use of external address providers has to be activated through an additional data field "AdditionalAddressProvider" in the request.
   *
   * @type {*}
   * @memberof Location
   */
  additionalData?: any;
}
