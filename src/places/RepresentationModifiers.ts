export default interface RepresentationModifiers {
  /**
   * The size parameter defines the maximum number of items that should be in a page in responses that contain paginateble collections.
   *
   * If you do not specify a value for size, each collection may define its own default.
   *
   *  Individual collections may define a maximum page size and then use that instead of the value provided in the search results.
   *
   * @type {number}
   * @memberof RepresentationModifiers
   */
  size: number;
  /**
   * Some response attributes are defined as rich text strings.
   *
   * You can use the text format parameter (tf) to specify the format of rich text attributes.
   *
   * - html - (default) rich text is rendered as an XHTML fragment using a subset of the standard HTML elements applicable for text rendering, including
   *   - a
   *   - b
   *   - br
   *   - i
   *   - h*
   *   - img (only used for inline-images)
   *   - li
   *   - ol
   *   - p
   *   - ul
   * - plain - rich text is reduced to plain text representation
   * @type {('html' | 'plain')}
   * @memberof RepresentationModifiers
   */
  tf: 'html' | 'plain';
  /**
   * When a resource provides a URI for image resources (for example, photos of a place), you can specify maximum sizes for those images in your request to match your UI and bandwidth requirements.
   *
   * The format is a comma-separated list, where each element specifies dimensions for a scaled image by providing the desired width, the desired height, or both.
   *
   * The provided values are used as upper limits for the dimensions of the images in the responses. Small images are never scaled and the aspect ratio of the original image remains intact.
   * 
   * If you use the parameter image_dimensions, the image objects in media.images.items contain a dimensions attribute, which is a map containing links to the sized variants of the original image.

   * @type {string}
   * @memberof RepresentationModifiers
   * @example image_dimensions=w32-h32,w64-h64
   * @example image_dimensions=w32-h32,w300
   * @example image_dimensions=h200
   */
  image_dimensions: string;
  /**
   * The parameter show_content allows you to request additional content related to the search result.
   *
   * The format is a comma-separated list of content names.
   *
   * @type {string}
   * @memberof RepresentationModifiers
   */
  show_content: string;
  /**
   * The parameter show_refs allows you to request that place/location IDs from external systems be included in the response.
   *
   * The format is a comma-separated list of external system names.
   *
   * The option can only be used when requesting the following media types:
   * - Place Media Type
   * - Search Media Type
   *
   * @type {string}
   * @memberof RepresentationModifiers
   * @see https://developer.here.com/documentation/places/dev_guide/topics/external-references.html
   */
  show_refs: string;
  /**
   * You can use the parameter teasers to specify the maximum number of places in a response to a search request that should have teaser information (for example, an image URL) included.
   *
   * @type {number}
   * @memberof RepresentationModifiers
   * @default 0
   */
  teasers: number;
  /**
   * The parameter cs allows you to request that multiple POI categories from different category systems be included in the response.
   *
   * The format is a comma-separated list of category system names.
   *
   * This option can only be used when requesting the following media types:
   * - Place Media Type
   * - Search Media Type
   *
   * The possible values of the parameter are:
   * - places – Place categories
   * - cuisines – Cuisine categories
   *
   * @type {('places' | 'cuisines')}
   * @memberof RepresentationModifiers
   */
  cs: 'places' | 'cuisines';
}
