export default interface AutosuggestQueryCompletion {
  /**
   * A title for this query completion to be displayed to the user.
   *
   * @type {string}
   * @memberof AutosuggestQueryCompletion
   */
  title: string;
  /**
   * The same content as the 'title' field.
   *
   * However, it contains markup highlighting the parts of the string that were matched.
   *
   * @type {string}
   * @memberof AutosuggestQueryCompletion
   */
  highlightedTitle: string;
  /**
   * The suggested query completion
   *
   * @type {string}
   * @memberof AutosuggestQueryCompletion
   */
  completion: string;
  /**
   * A hyperlink to Autosuggest query with completed term.
   *
   * @type {string}
   * @memberof AutosuggestQueryCompletion
   */
  href: string;
  /**
   * All Autosuggest query completion results have type 'urn:nlp-types:autosuggest'
   *
   * @type {'urn:nlp-types:autosuggest'}
   * @memberof AutosuggestQueryCompletion
   */
  type: 'urn:nlp-types:autosuggest';
  /**
   * The type of Autosuggest result item which is 'query' for query completions
   *
   * @type {string}
   * @memberof AutosuggestQueryCompletion
   */
  resultType: string;
}
