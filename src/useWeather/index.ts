import useAxios from '../useAxios';
import Alerts from './interfaces/Alerts';
import Observations from './interfaces/Observation';
import Forecasts from './interfaces/Forecasts';
import DailyForecast from './interfaces/DailyForecast';
import HourlyForecast from './interfaces/HourlyForecast';
import NWSAlerts from './interfaces/NWSAlerts';
import Astronomy from './interfaces/Astronomy';

interface WeatherRequestParameters {
  /**
   * A parameter identifying the type of report to obtain.
   *
   * The possible values are as follows:
   *
   * observation – current weather conditions from the eight closest locations to the specified location
   * forecast_7days – morning, afternoon, evening and night weather forecasts for the next seven days.
   * forecast_7days_simple – daily weather forecasts for the next seven days
   * forecast_hourly – hourly weather forecasts for the next seven days
   * forecast_astronomy – information on when the sun and moon rise and set, and on the phase of the moon for the next seven days
   * alerts – forecasted weather alerts for the next 24 hours
   * nws_alerts – all active watches and warnings for the US and Canada
   *
   * @type {string}
   * @memberof WeatherRequestParameters
   */
  product:
    | 'observation'
    | 'forecast_7days'
    | 'forecast_7days_simple'
    | 'forecast_hourly'
    | 'forecast_astronomy'
    | 'alerts'
    | 'nws_alerts';
  /**
   * Geographical coordinates in WGS-84-compliant format, specifying the area covered by the weather report.
   *
   * The response is for the closest reporting stations to these coordinates.
   *
   * @type {number}
   * @memberof WeatherRequestParameters
   * @example latitude=41.83&longitude=-87.68
   */
  latitude?: number;
  /**
   * Geographical coordinates in WGS-84-compliant format, specifying the area covered by the weather report.
   *
   * The response is for the closest reporting stations to these coordinates.
   *
   * @type {number}
   * @memberof WeatherRequestParameters
   * @example latitude=41.83&longitude=-87.68
   */
  longitude?: number;
  /**
   * Name of a city.
   *
   * If there is more than one match for the name, then the most populous location is in the response.
   *
   * Country, state and street name can be added to this parameter.
   *
   * The response for name=Berlin, USA is a report for the city of Berlin, New Hampshire, the response for name=Berlin, IL is a report for the city of Berlin, Illinois, and the response for name=Berlin is a report for the city of Berlin, Germany.
   *
   * @type {string}
   * @memberof WeatherRequestParameters
   * @example name=Berlin
   */
  name?: string;
  /**
   * ZIP code of the location.
   *
   * This parameter is supported only for locations in the United States of America.
   *
   * @type {string}
   * @memberof WeatherRequestParameters
   */
  zipcode?: string;
  /**
   * Date for which hourly forecasts are to be retrieved. The format is YYYY-MM-DD or YYYY-MM-DDThh:mm:ss
   * Available only when the product parameter is set to forecast_hourly
   *
   * If you set hourlydate for a date and time in the past or more than seven days in the future, the response does not contain any information.
   *
   * If you set hourlydate to the current date, the response contains hourly forecasts for the current date, including some forecasts before when you sent the query depending on the data in the system.
   *
   *  If you set hourlydate to a future date, the response contains hourly forecasts for the entire day.
   *
   * @type {string}
   * @memberof WeatherRequestParameters
   */
  hourlycode?: string;
  /**
   * If set to true, the response only includes the closest location.
   *
   * Only available when the product parameter is set to observation.
   *
   * @type {boolean}
   * @memberof WeatherRequestParameters
   * @default false
   */
  oneobservation?: boolean;
  /**
   * Defines the language used in the descriptions in the response. For example, the response for a query with language=german has descriptions in German.
   *
   * If the language specified is not supported, the response contains descriptions in English.
   *
   * @type {string}
   * @memberof WeatherRequestParameters
   * @default english
   * @see https://developer.here.com/documentation/weather/dev_guide/topics/supported-languages.html for a list of the supported languages.
   */
  language?: string;
  /**
   * Defines whether metric or imperial units are used in the response.
   *
   * If set to false, the response contains imperial units (feet, inch, Fahrenheit, miles).
   *
   * @type {boolean}
   * @memberof WeatherRequestParameters
   * @default true
   */
  metric?: boolean;
}

interface WeatherResponse {
  /**
   * One or more reports on current weather conditions.
   *
   * Used when the product parameter value is observation.
   *
   * @type {Observations}
   * @memberof WeatherResponse
   */
  observations?: Observations;
  /**
   * Morning, afternoon, evening and night weather forecasts for the next seven days.
   *
   * Used when the product parameter value is forecast_7days.
   *
   * @type {Forecasts}
   * @memberof WeatherResponse
   */
  forecasts?: Forecasts;
  /**
   * Daily weather forecasts for the next seven days.
   *
   * Used when the product parameter value is forecast_7days_simple.
   *
   * @type {DailyForecast}
   * @memberof WeatherResponse
   */
  dailyForecasts?: DailyForecast;
  /**
   * Hourly forecasts for the next seven days.
   *
   * Used when the product parameter value is forecast_hourly.
   *
   * @type {HourlyForecast}
   * @memberof WeatherResponse
   */
  hourlyForecasts?: HourlyForecast;
  /**
   * Weather alerts, if any, for the closest locations to the specified location.
   * Used when the product parameter value is alerts.
   *
   * Note that this element may have the attributes defined in LocationMetadata.
   *
   * @type {Alerts}
   * @memberof WeatherResponse
   */
  alerts?: Alerts;
  /**
   * National Weather Service active warnings and watches for the US and Canada, if any, for the closest locations to the specified location.
   *
   * Used when the product parameter value is nws_alerts.
   *
   * @type {NWSAlerts}
   * @memberof WeatherResponse
   */
  nwsAlerts?: NWSAlerts;
  /**
   * Sun and moon rise and set times, and the phase of the moon for the next seven days.
   * Used when the product parameter value is forecast_astronomy.
   *
   * Note that this element may have the attributes defined in LocationMetadata.
   *
   * @type {Astronomy}
   * @memberof WeatherResponse
   */
  astronomy?: Astronomy;
  /**
   * Time the report was created.
   *
   * The format is YYYY-MM-DDThh:mm:ssfZ.
   *
   * @type {string}
   * @memberof WeatherResponse
   */
  feedCreation: string;
  /**
   * Whether the values in the report use metric or Imperial units.
   *
   * true means that metric values are used.
   *
   * @type {boolean}
   * @memberof WeatherResponse
   * @default true
   */
  metric: boolean;
}

/**
 * Give insights into real-time weather forecasts, alerts, and astronomical info for any location.
 */
const useWeather = () =>
  useAxios<WeatherRequestParameters, WeatherResponse>({
    domains: {
      appCode: 'https://weather.api.here.com/weather/1.0/report.json',
      apiKey: 'https://weather.ls.hereapi.com/weather/1.0/report.json',
    },
  });

export default useWeather;
