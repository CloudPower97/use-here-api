import ForecastLocation from './ForecastLocation';

export default interface HourlyForecast {
  /**
   * Forecast location.
   *
   * Note that this element may have the attributes defined in LocationMetadata.
   *
   * @type {ForecastLocation}
   * @memberof HourlyForecast
   */
  forecastLocation: ForecastLocation;
}
