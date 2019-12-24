import MetaInfo from './MetaInfo';
import View from './View';
export default interface SearchResponse {
  response: {
    /**
     * Meta Information about the Request
     *
     * @type {MetaInfo}
     */
    metaInfo: MetaInfo;
    /**
     * Search Results are grouped in Views.
     *
     * @type {View[]}
     */
    view: View[];
  };
}
