import MetaInfo from './MetaInfo';
import View from './View';
export default interface SearchResponse {
  response: {
    metaInfo: MetaInfo;
    view: View[];
  };
}
