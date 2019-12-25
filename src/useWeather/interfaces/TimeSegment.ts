export default interface TimeSegment {
  /**
   * M (Morning), A (Afternoon), E (Evening) or N (Night).
   *
   * @type {('M' | 'A' | 'E' | 'N')}
   * @memberof TimeSegment
   */
  segment: 'M' | 'A' | 'E' | 'N';
  /**
   * Weekday number 1 through 7, where 1 indicates Sunday.
   *
   * @type {number}
   * @memberof TimeSegment
   */
  dayOfWeek: number;
}
