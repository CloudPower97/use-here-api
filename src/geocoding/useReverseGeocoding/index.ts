import ReverseGeocodingResponse from '../interfaces/SearchResponse';
import RequestParameters from '../interfaces/RequestParameters';
import AddressAttributes from '../interfaces/AddressAttributes';
import useAxios from 'axios-hooks';

interface ReverseGeocodingRequestParameters extends RequestParameters {
  /**
   * Target match level of the search result.
   *
   * One of [country, state, county, city, district, postalCode].
   *
   * Only valid in combination with gen=2 or higher
   */
  level?: Extract<
    AddressAttributes,
    'country' | 'state' | 'county' | 'city' | 'district' | 'postalCode'
  >;
  /**
   * Indicates that the service is to ignore the specified radius until minResults results are found.
   * Supported for Reverse Geocode mode=retrieveAreas and mode=retrieveAddresses
   *
   * @default 0
   */
  minresults?: number;
  /**
   * One of five values:
   *
   * retrieveAddresses - Search for the closest street address
   *
   * addressesretrieveAreas - Retrieve the administrative area information for the position provided in the request
   *
   * retrieveLandmarks - Search for landmarks like parks and lakes in the proximity provided in the request
   *
   * retrieveAll - Search for streets, administrative areas and landmarks. This mode aggregates the results of the three different modes in one
   *
   * calltrackPosition - Retrieve street and address information based on a position and bearing
   */
  mode:
    | 'retrieveAddresses'
    | 'addressesretrieveAreas'
    | 'retrieveLandmarks'
    | 'retrieveAll'
    | 'calltrackPosition';
  /**
   * A position with latitude, longitude, and bearing.
   *
   * Bearing expresses the direction in which an asset is heading in degrees starting at true north and continuing clockwise around the compass.
   *
   * North is 0 degrees, east is 90 degrees, south is 180 degrees, west is 270 degrees
   */
  pos?: string;
  /**
   * Sort results by distance (default), population count, or size (approximate area size).
   *
   * One of [distance, population, size].
   *
   * Currently only supported for Reverse Geocode mode=retrieveAreas.
   *
   * If population count is not available for an entity the service falls back to sort by area size.
   *
   * @default distance
   */
  sortby?: 'distance' | 'population' | 'size';
}

/**
 * Submit a geocoordinate and an optional radius to request the corresponding address.
 */
const useReverseGeocoding = (
  params: ReverseGeocodingRequestParameters,
  options?: {
    manual?: boolean;
  }
) =>
  useAxios<ReverseGeocodingResponse>(
    {
      // @ts-ignore
      baseURL: params.apiKey
        ? 'https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json'
        : 'https://reverse.geocoder.api.here.com/6.2/reversegeocode.json',
      params,
    },
    options
  );

export default useReverseGeocoding;
