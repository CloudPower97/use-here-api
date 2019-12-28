export default interface AutosuggestSearch {
  /**
   * A title for this search to be displayed to the user
   *
   * @type {string}
   * @memberof AutosuggestSearch
   */
  title: string;
  /**
   * The same content as the 'title' field.
   *
   * However, it contains markup highlighting the parts of the string that were matched.
   *
   * @type {string}
   * @memberof AutosuggestSearch
   */
  highlightedTitle: string;
  /**
   * A category associated with this search.
   *
   * @type {string}
   * @memberof AutosuggestSearch
   */
  category?: string;
  /**
   * A position that is associated with the suggested search.
   *
   * @type {number[]}
   * @memberof AutosuggestSearch
   */
  position?: number[];
  /**
   * A bounding box that is associated with the suggested search.
   *
   * @type {number[]}
   * @memberof AutosuggestSearch
   */
  bbox?: number[];
  /**
   * A hyperlink to the search suggested (e.g. category search).
   *
   * @type {string}
   * @memberof AutosuggestSearch
   */
  href: string;
  /**
   * All Autosuggest query results have type 'urn:nlp-types:search'
   *
   * @type {urn:nlp-types:search}
   * @memberof AutosuggestSearch
   */
  type: 'urn:nlp-types:search';
  /**
   * The type of Autosuggest result item which is 'category' for categories, 'chain' for chains and 'query' for other search types.
   *
   * @type {('category' | 'chain' | 'query')}
   * @memberof AutosuggestSearch
   */
  resultType: 'category' | 'chain' | 'query';
  /**
   * Distance to the suggested search in meters calculated as described in Search Location and Distance Calculation.
   *
   * @type {number}
   * @memberof AutosuggestSearch
   * @see https://developer.here.com/documentation/places/dev_guide/topics/location-contexts.html
   */
  distance?: number;
}
