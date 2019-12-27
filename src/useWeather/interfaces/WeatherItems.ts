import LocationMetadata from './LocationMetadata';

export default interface WeatherItems extends Partial<LocationMetadata> {
  /**
   * Part of the day (D=day or N=night).
   *
   * @type {('D' | 'N')}
   * @memberof WeatherItems
   */
  daylight: 'D' | 'N';
  /**
   * Morning, Afternoon, Evening or Night.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  daysegment: string;
  /**
   * Weather description.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  description: string;
  /**
   * Sky descriptor value.
   *
   * If the element is in the response and it contains a value, there is an Integer in the String. If the element is in the response and it does not contain a value, there is an asterisk (*) in the String.
   *
   * The available values are as follows:
   *
   * 1 – Sunny
   * 2 – Clear
   * 3 – Mostly Sunny
   * 4 – Mostly Clear
   * 5 – Hazy Sunshine
   * 6 – Haze
   * 7 – Passing Clouds
   * 8 – More Sun than Clouds
   * 9 – Scattered Clouds
   * 10 – Partly Cloudy
   * 11 – A Mixture of Sun and Clouds
   * 12 – High Level Clouds
   * 13 – More Clouds than Sun
   * 14 – Partly Sunny
   * 15 – Broken Clouds
   * 16 – Mostly Cloudy
   * 17 – Cloudy
   * 18 – Overcast
   * 19 – Low Clouds
   * 20 – Light Fog
   * 21 – Fog
   * 22 – Dense Fog
   * 23 – Ice Fog
   * 24 – Sandstorm
   * 25 – Duststorm
   * 26 – Increasing Cloudiness
   * 27 – Decreasing Cloudiness
   * 28 – Clearing Skies
   * 29 – Breaks of Sun Later
   * 30 – Early Fog Followed by Sunny Skies
   * 31 – Afternoon Clouds
   * 32 – Morning Clouds
   * 33 – Smoke
   * 34 – Low Level Haze
   *
   * @type {string}
   * @memberof WeatherItems
   */
  skyInfo: string;
  /**
   * Description of sky conditions.
   *
   * See the text descriptions associated with the skyInfo element above.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  skyDescription: string;
  /**
   * Temperature in Celsius/Fahrenheit.
   *
   * If the element is in the response and it contains a value, there is a Double in the String. If the element is in the response and it does not contain a value, there is an asterisk (*) in the String.
   *
   * The value depends on the metric parameter value. The default is Celsius.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  temperature: string;
  /**
   * Temperature description.
   *
   * The available values are as follows:
   *
   * Extremely Cold
   * Frigid
   * Cold
   * Chilly
   * Nippy
   * Cool
   * Refreshing Cool
   * Mild
   * Pleasantly Warm
   * Warm
   * Hot
   * Extremely Hot
   * Breezy
   * Windy
   * Gusty
   * Blustery
   * Very Windy
   * Extremely Windy
   * High Winds
   * Beautiful
   * Very Nice
   * Nice
   * Dreary
   * Smoggy
   * Low Level Pollution
   * Blowing Snow
   * Blowing Spray
   * Dry
   * Comfortable
   * Crisp
   * Raw
   * Damp
   * Humid
   * Muggy
   * Sultry
   * Steamy
   *
   * @type {string}
   * @memberof WeatherItems
   */
  temperatureDesc: string;
  /**
   * Comfort level in degrees. This value indicates what the temperature feels like, depending on a variety of environmental factors such as wind speed and humidity.
   *
   * If the element is in the response and it contains a value, there is a Double in the String. If the element is in the response and it does not contain a value, there is an asterisk (*) in the String.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  comfort: string;
  /**
   * The Highest temperature for the day in Celsius/Fahrenheit.
   *
   * If the element is in the response and it contains a value, there is a Double in the String. If the element is in the response and it does not contain a value, there is an asterisk (*) in the String.
   *
   * The value used depends on the metric parameter value. The default is Celsius.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  highTemperature: string;
  /**
   * The lowest temperature for the day in Celsius/Fahrenheit.
   *
   * If the element is in the response and it contains a value, there is a Double in the String. If the element is in the response and it does not contain a value, there is an asterisk (*) in the String.
   *
   * The value used depends on the metric parameter value. The default is Celsius.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  lowTemperature: string;
  /**
   * Humidity as a percentage (%)
   *
   * If the element is in the response and it contains a value, there is a Double in the String. If the element is in the response and it does not contain a value, there is an asterisk (*) in the String.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  humidity: string;
  /**
   * Dew point in Celsius/Fahrenheit.
   *
   * If the element is in the response and it contains a value, there is a Double in the String. If the element is in the response and it does not contain a value, there is an asterisk (*) in the String.
   *
   * The value used depends on the metric parameter value. The default is Celsius.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  dewPoint: string;
  /**
   * Precipitation over 1 hour in cm/in.
   *
   * If the element is in the response and it contains a value, there is a Double in the String. If the element is in the response and it does not contain a value, there is an asterisk (*) in the String.
   *
   * The value used depends on the metric parameter value.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  precipitation1H: string;
  /**
   * Precipitation over 3 hours in cm/in.
   *
   * If the element is in the response and it contains a value, there is a Double in the String. If the element is in the response and it does not contain a value, there is an asterisk (*) in the String.
   *
   * The value used depends on the metric parameter value.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  precipitation3H: string;
  /**
   * Precipitation over 6 hours in cm/in.
   *
   * If the element is in the response and it contains a value, there is a Double in the String. If the element is in the response and it does not contain a value, there is an asterisk (*) in the String.
   *
   * The value used depends on the metric parameter value.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  precipitation6H: string;
  /**
   * Precipitation over 12 hours in cm/in.
   *
   * If the element is in the response and it contains a value, there is a Double in the String. If the element is in the response and it does not contain a value, there is an asterisk (*) in the String.
   *
   * The value used depends on the metric parameter value.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  precipitation12H: string;
  /**
   * Precipitation ovr 24 hours in cm/in.
   *
   * If the element is in the response and it contains a value, there is a Double in the String. If the element is in the response and it does not contain a value, there is an asterisk (*) in the String.
   *
   * The value used depends on the metric parameter value.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  precipitation24H: string;
  /**
   * Precipitation probability percentage (%).
   *
   * If the element is in the response and it contains a value, there is an Integer in the String. If the element is in the response and it does not contain a value, there is an asterisk (*) in the String.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  precipitationProbability: string;
  /**
   * Precipitation description.
   *
   * The possible values are:
   *
   * Drizzle
   * Sprinkles
   * Scattered Showers
   * A Few Showers
   * Light Showers
   * Passing Showers
   * Light Rain
   * Rain Showers
   * Rain
   * Numerous Showers
   * Showery
   * Heavy Rain
   * Lots of Rain
   * Tons of Rain
   * Flash Floods
   * Widely Scattered TStorms
   * Isolated TStorms
   * A Few TStorms
   * Thundershowers
   * Thunderstorms
   * Strong Thunderstorms
   * Severe Thunderstorms
   * Hail
   * Tornado
   * Tropical Storm
   * Hurricane
   * Light Freezing Rain
   * Light Mixture of Precip
   * Sleet
   * Icy Mix
   * Freezing Rain
   * Mixture of Precip
   * Heavy Mixture of Precip
   * Snow Changing to Rain
   * Snow Changing to an Icy Mix
   * An Icy Mix Changing to Snow
   * An Icy Mix Changing to Rain
   * Rain Changing to Snow
   * Rain Changing to an Icy Mix
   * Scattered Flurries
   * Snow Flurries
   * Light Snow Showers
   * Snow Showers
   * Light Snow
   * Snow
   * Moderate Snow
   * Heavy Snow
   * Snowstorm
   * Blizzard
   * Sprinkles Early
   * Showers Early
   * Light Rain Early
   * Rain Early
   * Heavy Rain Early
   * TStorms Early
   * Flurries Early
   * Snow Showers Early
   * Light Snow Early
   * Snow Early
   * Heavy Snow Early
   * Light Icy Mix Early
   * Icy Mix Early
   * Sprinkles Late
   * Showers Late
   * Light Rain Late
   * Rain Late
   * Heavy Rain Late
   * Isolated TStorms Late
   * Scattered TStorms Late
   * TStorms Late
   * Flurries Late
   * Snow Showers Late
   * Light Snow Late
   * Snow Late
   * Heavy Snow Late
   * Light Icy Mix Late
   * Icy Mix Late
   *
   * @type {string}
   * @memberof WeatherItems
   */
  precipitationDesc: string;
  /**
   * Amount of rain in cm/in.
   *
   * If the element is in the response and it contains a value, there is a Double in the String. If the element is in the response and it does not contain a value, there is an asterisk (*) in the String.
   *
   * The value used depends on the metric parameter value.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  rainFall: string;
  /**
   * Amount of snow in cm/in.
   *
   * If the element is in the response and it contains a value, there is a Double in the String. If the element is in the response and it does not contain a value, there is an asterisk (*) in the String.
   *
   * The value used depends on the metric parameter value.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  snowFall: string;
  /**
   * Amount of snow on the ground in cm/in.
   *
   * If the element is in the response and it contains a value, there is a Double in the String. If the element is in the response and it does not contain a value, there is an asterisk (*) in the String.
   *
   * The value used depends on the metric parameter value.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  snowCover: string;
  /**
   * Air description value
   *
   * If the element is in the response and it contains a value, there is an Integer in the String. If the element is in the response and it does not contain a value, there is an asterisk (*) in the String.
   *
   * The possible values are as follows:
   *
   * 1 – Extremely Cold
   * 2 – Frigid
   * 3 – Cold
   * 4 – Chilly
   * 5 – Nippy
   * 6 – Cool
   * 7 – Refreshing Cool
   * 8 – Mild
   * 9 – Pleasantly Warm
   * 10 – Warm
   * 11 – Hot
   * 12 – Extremely Hot
   * 13 – Breezy
   * 14 – Windy
   * 15 – Gusty
   * 16 – Blustery
   * 17 – Very Windy
   * 18 – Extremely Windy
   * 19 – High Winds
   * 20 – Beautiful
   * 21 – Very Nice
   * 22 – Nice
   * 23 – Dreary
   * 24 – Smoggy
   * 25 – Low Level Pollution
   * 26 – Blowing Snow
   * 27 – Blowing Spray
   * 28 – Dry
   * 29 – Comfortable
   * 30 – Crisp
   * 31 – Raw
   * 32 – Damp
   * 33 – Humid
   * 34 – Muggy
   * 35 – Sultry
   * 36 – Steamy
   *
   * @type {string}
   * @memberof WeatherItems
   */
  airInfo: string;
  /**
   * Air description.
   *
   * See the text descriptions associated with the airInfo element above.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  airDescription: string;
  /**
   * Wind speed in km/h or mph.
   *
   * If the element is in the response and it contains a value, there is a Double in the String. If the element is in the response and it does not contain a value, there is an asterisk (*) in the String.
   *
   * The value used depends on the metric parameter value.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  windSpeed: string;
  /**
   * Wind direction in degrees.
   *
   * If the element is in the response and it contains a value, there is an Integer in the String. If the element is in the response and it does not contain a value, there is an asterisk (*) in the String.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  windDirection: string;
  /**
   * Description of the direction the wind is coming from, for example Northwest.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  windDesc: string;
  /**
   * Abbreviation of the direction the wind is coming from, for example NW.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  windDescShort: string;
  /**
   * Wind speed on the Beaufort scale.
   *
   * If the element is in the response and it contains a value, there is an Integer in the String. If the element is in the response and it does not contain a value, there is an asterisk (*) in the String.
   *
   * The possible values are:
   *
   * 0 – Calm
   * 1 – Light Air
   * 2 – Light Breeze
   * 3 – Gentle Breeze
   * 4 – Moderate Breeze
   * 5 – Fresh Breeze
   * 6 – Strong Breeze
   * 7 – Near Gale
   * 8 – Gale
   * 9 – Severe Gale
   * 10 – Storm
   * 11 – Violent Storm
   * 12 – Hurricane
   *
   * @type {string}
   * @memberof WeatherItems
   */
  beaufortScale: string;
  /**
   * Beaufort scale conditions description.
   *
   * See the text descriptions associated with the beaufortScale element above.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  beaufortDescription: string;
  /**
   * UV Index value.
   *
   * If the element is in the response and it contains a value, there is an Integer in the String. If the element is in the response and it does not contain a value, there is an asterisk (*) in the String.
   *
   * The possible values are:
   *
   * 0 – Minimal
   * 3 – Low
   * 5 – Moderate
   * 7 – High
   * 10 – Extreme
   *
   * @type {string}
   * @memberof WeatherItems
   */
  uvIndex: string;
  /**
   * UV conditions description.
   *
   * See the text descriptions associated with the uvIndex element above.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  uvDesc: string;
  /**
   * Barometric pressure in mbar/in.
   *
   * If the element is in the response and it contains a value, there is a Double in the String. If the element is in the response and it does not contain a value, there is an asterisk (*) in the String.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  barometerPressure: string;
  /**
   * Description of the trend in the barometric pressure.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  barometerTrend: string;
  /**
   * Visibility in km/mi.
   *
   * If the element is in the response and it contains a value, there is a Double in the String. If the element is in the response and it does not contain a value, there is an asterisk (*) in the String.
   *
   * The value used depends on the metric parameter value.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  visibility: string;
  /**
   * Icon number.
   *
   * DEPRECATED: We recommend that you use the values in the iconName element.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  icon: string;
  /**
   * Icon name.
   *
   * The possible values are:
   *
   * sunny
   * clear
   * mostly_sunny
   * mostly_clear
   * passing_clounds
   * more_sun_than_clouds
   * scattered_clouds
   * partly_cloudy
   * a_mixture_of_sun_and_clouds
   * increasing_cloudiness
   * breaks_of_sun_late
   * afternoon_clouds
   * morning_clouds
   * partly_sunny
   * high_level_clouds
   * decreasing_cloudiness
   * clearing_skies
   * high_clouds
   * rain_early
   * heavy_rain_early
   * strong_thunderstorms
   * severe_thunderstorms
   * thundershowers
   * thunderstorms
   * tstorms_early
   * isolated_tstorms_late
   * scattered_tstorms_late
   * tstorms_late
   * tstorms
   * ice_fog
   * more_clouds_than_sun
   * broken_clouds
   * scattered_showers
   * a_few_showers
   * light_showers
   * passing_showers
   * rain_showers
   * showers
   * widely_scattered_tstorms
   * isolated_tstorms
   * a_few_tstorms
   * scattered_tstorms
   * hazy_sunshine
   * haze
   * smoke
   * low_level_haze
   * early_fog_followed_by_sunny_skies
   * early_fog
   * light_fog
   * fog
   * dense_fog
   * night_haze
   * night_smoke
   * night_low_level_haze
   * night_widely_scattered_tstorms
   * night_isolated_tstorms
   * night_a_few_tstorms
   * night_scattered_tstorms
   * night_tstorms
   * night_clear
   * mostly_cloudy
   * cloudy
   * overcast
   * low_clouds
   * hail
   * sleet
   * light_mixture_of_precip
   * icy_mix
   * mixture_of_precip
   * heavy_mixture_of_precip
   * snow_changing_to_rain
   * snow_changing_to_an_icy_mix
   * an_icy_mix_changing_to_snow
   * an_icy_mix_changing_to_rain
   * rain_changing_to_snow
   * rain_changing_to_an_icy_mix
   * light_icy_mix_early
   * icy_mix_early
   * light_icy_mix_late
   * icy_mix_late
   * snow_rain_mix
   * scattered_flurries
   * snow_flurries
   * light_snow_showers
   * snow_showers
   * light_snow
   * flurries_early
   * snow_showers_early
   * light_snow_early
   * flurries_late
   * snow_showers_late
   * light_snow_late
   * night_decreasing_cloudiness
   * night_clearing_skies
   * night_high_level_clouds
   * night_high_clouds
   * night_scattered_showers
   * night_a_few_showers
   * night_light_showers
   * night_passing_showers
   * night_rain_showers
   * night_sprinkles
   * night_showers
   * night_mostly_clear
   * night_passing_clouds
   * night_scattered_clouds
   * night_partly_cloudy
   * increasing_cloudiness
   * night_afternoon_clouds
   * night_morning_clouds
   * night_broken_clouds
   * night_mostly_cloudy
   * light_freezing_rain
   * freezing_rain
   * heavy_rain
   * lots_of_rain
   * tons_of_rain
   * heavy_rain_early
   * heavy_rain_late
   * flash_floods
   * flood
   * drizzle
   * sprinkles
   * light_rain
   * sprinkles_early
   * light_rain_early
   * sprinkles_late
   * light_rain_late
   * rain
   * numerous_showers
   * showery
   * showers_early
   * rain_early
   * showers_late
   * rain_late
   * snow
   * moderate_snow
   * snow_early
   * snow_late
   * heavy_snow
   * heavy_snow_early
   * heavy_snow_late
   * tornado
   * tropical_storm
   * hurricane
   * sandstorm
   * duststorm
   * snowstorm
   * blizzard
   * cw_no_report_icon
   *
   * @type {string}
   * @memberof WeatherItems
   */
  iconName: string;
  /**
   * Link to icon resource file.
   *
   * Note that an individual icon may be used for more than one of the iconName values given above and image file name may be different from icon field value.
   *
   * @type {string}
   * @memberof WeatherItems
   */
  iconLink: string;
  /**
   * Data age in minutes.
   *
   * @type {number}
   * @memberof WeatherItems
   */
  ageMinutes: number;
  /**
   * Number of active alerts.
   *
   * @type {number}
   * @memberof WeatherItems
   */
  activeAlerts: number;
}
