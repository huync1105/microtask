export class WeatherApi {
  private static readonly version = 'v1'
  private static readonly baseUrl = {
    geoCoding: `https://geocoding-api.open-meteo.com/${this.version}`,
    apiOpen: `https://api.open-meteo.com/${this.version}`
  };

  public static readonly geoCodingSearchApi = `${this.baseUrl.geoCoding}/search`;
  public static readonly forecastSearchApi = `${this.baseUrl.apiOpen}/forecast`;
}

export class ForecastOptions {

  private readonly hourlyOptions = ['temperature_2m', 'relativehumidity_2m', 'dewpoint_2m', 'apparent_temperature', 'windgusts_10m', 'shortwave_radiation', 'rain', 'is_day'];
  private readonly dailyOptions = ['temperature_2m_max', 'temperature_2m_min', 'rain_sum', 'showers_sum', 'sunrise', 'sunset', 'windspeed_10m_max', 'windgusts_10m_max', 'uv_index_max'];

  public readonly dailys = this.dailyOptions.map((opt, index) => ({
    isSelected: index === 0 || index === 1,
    value: opt
  }));

  public readonly hourlys = this.hourlyOptions.map((opt, index) => ({
    isSelected: index === 0 || index === 1,
    value: opt
  }));
}