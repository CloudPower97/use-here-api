export default interface MetaInfo {
  /**
   * 	Mirrored RequestId value from the request structure. Can be used to trace requests.
   *
   * @type {string}
   * @memberof MetaInfo
   */
  requestId?: string;
  /**
   * Time at which the search was performed.
   *
   * @type {string}
   * @memberof MetaInfo
   */
  timestamp: string;
  /**
   * Key which can be used in subsequent requests to acquire the next n results.
   * This element is only provided if paging has been activated in the request.
   *
   * @type {number}
   * @memberof MetaInfo
   */
  nextPageInformation?: number;
  /**
   * Key which can be used in subsequent requests to acquire the previous n results.
   * This element is only provided if paging has been activated in the request.
   *
   * @type {number}
   * @memberof MetaInfo
   */
  previousPageInformation?: number;
  /**
   * List of KeyValuePairType elements as generic container to attach additional information to the request.
   *
   * @type {*}
   * @memberof MetaInfo
   */
  additionalData?: any;
}
