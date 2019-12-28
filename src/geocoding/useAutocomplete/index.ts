import useAxios from '../../useAxios';
import Address from '../interfaces/Address';
import AddressAttributes from '../interfaces/AddressAttributes';

interface AutocompleteRequestParameters {
  /**
   * The search text which is the basis of the query.
   *
   * @type {string}
   * @memberof AutocompleteRequestParameters
   * @example query=Pariser Pl
   */
  query: string;
  /**
   * The upper limit the for number of suggestions to be included in the response.
   *
   * Valid range: 1 to 20.
   *
   * @type {number}
   * @memberof AutocompleteRequestParameters
   * @default 5
   * @example query=Pariser Pl&maxresults=10
   */
  maxresulsts?: number;
  /**
   * A type of Spatial Filter. The spatial filter limits the search for any other attributes in the request.
   *
   * The country parameter limits suggestions to a country or set of countries.
   *
   * country=ISO3 country code
   *
   * Can be combined with the mapview or prox spatial filters.
   *
   * @type {string}
   * @memberof AutocompleteRequestParameters
   * @example query=Rue du Froma&country=FRA
   * @example query=Rue du Froma&country=FRA,BEL
   */
  country?: string;
  /**
   * A type of Spatial Filter.
   *
   * Sets a focus on a geographic area represented by the top-left and the bottom-right corners of a bounding box so the results within this area are more important than results outside of this area.
   *
   * @type {string}
   * @memberof AutocompleteRequestParameters
   * @example mapview=41.90852,-87.67629;41.86827,-87.60419
   */
  mapview?: string;
  /**
   * A type of Spatial Filter.
   *
   * Sets a focus on a geographic area represented by a single geo-coordinate pair and optionally a radius (in meters) so the results within this area are more important than results outside of this area.
   *
   * Can be combined with the country spatial filter.
   *
   * @type {string}
   * @memberof AutocompleteRequestParameters
   * @example prox=37.86946,-122.26811,10000
   */
  prox?: string;
  /**
   * Mark the beginning of the match in a token.
   *
   * This can be any character sequence. Common usage is a HTML tag such as <b> for bold. But it can also be a square bracket, "[".
   *
   * @type {string}
   * @memberof AutocompleteRequestParameters
   * @default no marker
   * @example query=Barcelo&beginHighlight=<b>&endHighlight=</b>
   */
  beginHighlight?: string;
  /**
   * Mark the end of the match in a token.
   *
   * @type {string}
   * @memberof AutocompleteRequestParameters
   * @see beginHighlight
   */
  endHighlight?: string;
  /**
   * The preferred language of address elements in the result.
   *
   * The language parameter must be provided as 2-letter ISO language code. The plural form of the parameter (languages) is not supported and ignored.
   *
   * Only one language can be provided. The language setting changes the language of result elements where available in the map data.
   *
   * The language setting has no impact on matching or ranking and it does not express any regional preference.
   *
   * The default response language is the language that is most relevant to the query.
   *
   * @type {string}
   * @memberof AutocompleteRequestParameters
   * @example language=it&query=champs elys
   */
  language?: string;
  /**
   * The resultType=areas mode will filter on administrative area names. Results with matchLevels houseNumber, postalCode, street and intersection will not be returned.
   *
   * The resultType=postalCode mode will filter results on postal codes. Results will be of MatchLevel postalCode.
   *
   * Filter is available only in conjunction with country filter.
   *
   * The resultType=city mode will filter results on city names. Results will be of MatchLevel city.
   *
   * @type {('areas' | 'postalCode' | 'city')}
   * @memberof AutocompleteRequestParameters
   * @example resultType=areas&query=High
   * @example resultType=postalCode&query=61381&country=POL
   * @example resultType=city&country=che&query=Be
   */
  resultType?: 'areas' | 'postalCode' | 'city';
}

interface Suggestion {
  /**
   * Formatted response label including support for match highlights.
   *
   * @type {string}
   * @memberof Suggestion
   * @example label: "Deutschland, [Berli]n, [Berli]n, 10117, [Berli]n,[Pariser] Platz [1]"
   */
  label: string;
  /**
   * Language of the match. 2-letter ISO language code.
   *
   * @type {string}
   * @memberof Suggestion
   * @example language: "de"
   */
  language: string;
  /**
   * Country of the location. 3-letter ISO country code.
   *
   * @type {string}
   * @memberof Suggestion
   * @example countryCode: "DEU"
   */
  countryCode: string;
  /**
   * Client applications use the locationId for location lookup.
   *
   * @type {string}
   * @memberof Suggestion
   */
  locationId: string;
  /**
   * Structured address block. The address elements support match highlighting.
   *
   * For addresses from Australia, New Zealand and Canada a unit number can be included in the result if it was part of the query.
   *
   * @type {(Pick<
   *     Address,
   *     | 'country'
   *     | 'state'
   *     | 'county'
   *     | 'city'
   *     | 'district'
   *     | 'street'
   *     | 'houseNumber'
   *     | 'postalCode'
   *   > & {
   *     unit?: string;
   *   })}
   * @memberof Suggestion
   */
  address: Pick<
    Address,
    | 'country'
    | 'state'
    | 'county'
    | 'city'
    | 'district'
    | 'street'
    | 'houseNumber'
    | 'postalCode'
  > & {
    /**
     * Only included for addresses from Australia, New Zealand and Canada if it was part of the query.
     *
     * @type {string}
     */
    unit?: string;
  };
  /**
   * Distance in meters from the search center.
   *
   * Only available for queries with mapview or prox parameter.
   *
   * @type {number}
   * @memberof Suggestion
   * @example distance: 666
   */
  distance?: number;
  /**
   * Match precision. One of: houseNumber, intersection, street, postalCode, district, city, county, state, country
   *
   * @type {(Exclude<
   *         AddressAttributes,
   *         'subdistrict' | 'addressLines' | 'additionalData'
   *       >
   *     | 'intersection')}
   * @memberof Suggestion
   * @example matchLevel: "houseNumber"
   */
  matchLevel:
    | Exclude<
        AddressAttributes,
        'subdistrict' | 'addressLines' | 'additionalData'
      >
    | 'intersection';
}

interface AutocompleteResponse {
  /**
   * Top-most element holding list of suggestions.
   *
   * The element is absent in case of an error
   *
   * @type {Suggestion[]}
   * @memberof AutocompleteResponse
   */
  suggestions?: Suggestion[];
}

/**
 * Get better search suggestions for your addresses with fewer keystrokes.
 */
const useAutocomplete = () =>
  useAxios<AutocompleteRequestParameters, AutocompleteResponse>({
    domains: {
      apiKey: 'https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json',
      appCode: 'https://autocomplete.geocoder.api.here.com/6.2/suggest.json',
    },
  });

export default useAutocomplete;
