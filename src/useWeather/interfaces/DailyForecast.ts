import ForecastLocation from './ForecastLocation';

export default interface DailyForecast {
  /**
   * Forecast location.
   *
   * Note that this element may have the attributes defined in LocationMetadata.
   *
   * @type {ForecastLocation}
   * @memberof DailyForecast
   */
  forecastLocation: ForecastLocation;
}
