export default interface AutosuggestPlace {
  /**
   * A title for this place to be displayed to the user.
   *
   * @type {string}
   * @memberof AutosuggestPlace
   */
  title: string;
  /**
   * The same content as the 'title' field.
   *
   * However, it contains markup highlighting the parts of the string that were matched.
   *
   * @type {string}
   * @memberof AutosuggestPlace
   */
  highlightedTitle: string;
  /**
   * The textual description of the location of the place; usually derived from the address of the place, but may also contain any other description that helps a user understand where the place is located.
   *
   * @type {string}
   * @memberof AutosuggestPlace
   */
  vicinity?: string;
  /**
   * The same content as the 'vicinity' field.
   *
   * However, it contains markup highlighting the parts of the string that were matched.
   *
   * @type {string}
   * @memberof AutosuggestPlace
   */
  highlightedVicinity?: string;
  /**
   * The latitude and longitude of the place.
   *
   * This latitude and longitude is suitable for displaying the place's position on a map.
   *
   * @type {number[]}
   * @memberof AutosuggestPlace
   * @example [37.785141,-122.4047775]
   */
  position: number[];
  /**
   * A category id or name for this place.
   *
   * @type {string}
   * @memberof AutosuggestPlace
   */
  category?: string;
  /**
   * The (localized) display name of the category.
   *
   * @type {string}
   * @memberof AutosuggestPlace
   * @example Eat & Drink
   */
  categoryTitle: string;
  /**
   * A bounding box that is associated with this place, e.g. for moving the map view.
   *
   * @type {number[]}
   * @memberof AutosuggestPlace
   */
  bbox?: number[];
  /**
   * A hyperlink that refers to the resource with details for this place
   *
   * @type {string}
   * @memberof AutosuggestPlace
   */
  href: string;
  /**
   * All Autosuggest place and address results have type 'urn:nlp-types:place'
   *
   * @type {'urn:nlp-types:place'}
   * @memberof AutosuggestPlace
   */
  type: 'urn:nlp-types:place';
  /**
   * The type of Autosuggest result item which can be 'place' for a Place and 'address' for an Address
   *
   * @type {('place' | 'address')}
   * @memberof AutosuggestPlace
   */
  resultType: 'place' | 'address';
  /**
   * The unique identifier of the place.
   *
   * @type {string}
   * @memberof AutosuggestPlace
   */
  id: string;
  /**
   * Distance to the destination in meters calculated as described in Search Location and Distance Calculation.
   *
   * @type {number[]}
   * @memberof AutosuggestPlace
   * @see https://developer.here.com/documentation/places/dev_guide/topics/location-contexts.html
   */
  distance?: number[];
  /**
   * List of IDs of the chains that this place belongs to.
   *
   * @type {number[]}
   * @memberof AutosuggestPlace
   */
  chainIds: number[];
}
