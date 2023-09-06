export interface IGeoLocationRaw {
  id: number,
  name: string,
  latitude: number,
  longitude: number,
  elevation: number,
  feature_code: string,
  country_code: string,
  admin1_id: number,
  admin2_id: number,
  admin3_id: number,
  admin4_id: number,
  timezone: string,
  population: number,
  postcodes: number[],
  country_id: number,
  country: string,
  admin1: string,
  admin2: string,
  admin3: string,
  admin4: string,
}

export interface IForecastRespons {
  latitude: number,
  longitude: number,
  generationtime_ms: number,
  utc_offset_seconds: number,
  timezone: string,
  timezone_abbreviation: string,
  elevation: number,
  hourly_units: {
    time: string,
    temperature_2m: string,
    relativehumidity_2m: string,
    dewpoint_2m: string,
    apparent_temperature: string,
    windgusts_10m: string;
    shortwave_radiation: string;
    rain: string;
  },
  hourly: {
    time: string[],
    temperature_2m: number[],
    relativehumidity_2m: number[],
    dewpoint_2m: number[],
    apparent_temperature: number[],
    windgusts_10m: number[];
    shortwave_radiation: number[];
    rain: number[];
  },
  daily_units: {
    time: string,
    weathercode: string,
    temperature_2m_max: string,
    temperature_2m_min: string,
    sunrise: string,
    sunset: string,
    uv_index_max: string,
    rain_sum: string,
    windspeed_10m_max: string,
    windgusts_10m_max: string,
    showers_sum: string
  },
  daily: {
    time: string[],
    weathercode: number[],
    temperature_2m_max: number[],
    temperature_2m_min: number[],
    sunrise: string[],
    sunset: string[],
    uv_index_max: number[],
    rain_sum: number[],
    windspeed_10m_max: number[],
    windgusts_10m_max: number[],
    showers_sum: number[]
  }
}

export interface ISearhForeCastOpt {
  latitude: number;
  longitude: number;
  hourly: string;
  daily: string;
  timezone: string;
}