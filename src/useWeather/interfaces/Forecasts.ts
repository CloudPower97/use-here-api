import ForecastLocation from './ForecastLocation';

export default interface Forecasts {
  /**
   * Forecast location and forecasts.
   *
   * Note that this element may have the attributes defined in LocationMetadata.
   *
   * @type {ForecastLocation}
   * @memberof Forecasts
   */
  forecastLocation: ForecastLocation;
}
