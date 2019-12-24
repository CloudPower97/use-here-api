import SearchResult from './SearchResult';

export default interface View {
  /**
   * A key to distinguish between different types of views. Always set to 0.
   *
   * @type {0}
   * @memberof View
   */
  viewId: 0;
  /**
   * Search path which was performed for this search run.
   * In case of free-form searches, this element holds structured information, which indicates how user input has been interpreted by Search.
   *
   * The Performed Search has the same structure as a search request and can thus be used to repeat the same search.
   *
   * @type {*}
   * @memberof View
   */
  performedSearch?: any;
  /**
   * The resulting items which have been found along with attributes indicating the quality of the search result
   *
   * @type {SearchResult[]}
   * @memberof View
   * @see https://developer.here.com/documentation/geocoder/dev_guide/topics/resource-type-response-geocode.html#resource-type-response-geocode__results
   */
  result: SearchResult[];
}
