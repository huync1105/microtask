import { IForecastRespons, IGeoLocationRaw } from "@mfeng/shared/core/interface";


export class GeoLocation {
  constructor(private rawData: IGeoLocationRaw) { }

  get id() {
    return this.rawData.id;
  }

  get name() {
    return this.rawData.name;
  }

  get latitude() {
    return this.rawData.latitude;
  }

  get longitude() {
    return this.rawData.longitude;
  }

  get country() {
    return this.rawData.country;
  }

  get admin1() {
    return this.rawData.admin1;
  }

  get timezone() {
    return this.rawData.timezone;
  }
}

export class ForeCast {
  constructor(private rawData: IForecastRespons) { }

  get hourlyUnits() {
    const {
      apparent_temperature,
      dewpoint_2m,
      rain,
      relativehumidity_2m,
      shortwave_radiation,
      temperature_2m,
      time,
      windgusts_10m
    } = this.rawData.hourly_units;
    return {
      time: time,
      temperature2m: temperature_2m,
      apparentTemperature: apparent_temperature,
      dewpoint2m: dewpoint_2m,
      rain: rain,
      relativehumidity2m: relativehumidity_2m,
      shortwaveRadiation: shortwave_radiation,
      windgusts10m: windgusts_10m
    }
  }

  get hourly() {
    const {
      apparent_temperature,
      dewpoint_2m,
      rain,
      relativehumidity_2m,
      shortwave_radiation,
      temperature_2m,
      time,
      windgusts_10m
    } = this.rawData.hourly;
    return {
      time: time,
      temperature2m: temperature_2m,
      apparentTemperature: apparent_temperature,
      dewpoint2m: dewpoint_2m,
      rain: rain,
      relativehumidity2m: relativehumidity_2m,
      shortwaveRadiation: shortwave_radiation,
      windgusts10m: windgusts_10m
    }
  }

  get dailyUnits() {
    const daily = this.rawData.daily_units;
    return {
      temperature2mMax: daily.temperature_2m_max,
      temperature2mMin: daily.temperature_2m_min,
      uvIndexMax: daily.uv_index_max,
      rainSum: daily.rain_sum,
      windspeed10mMax: daily.windspeed_10m_max,
      windgusts10mMax: daily.windgusts_10m_max,
      sunrise: daily.sunrise,
      sunset: daily.sunset,
      showersSum: daily.showers_sum
    };
  }

  get daily() {
    const daily = this.rawData.daily;
    return {
      temperature2mMax: daily?.temperature_2m_max,
      temperature2mMin: daily?.temperature_2m_min,
      uvIndexMax: daily?.uv_index_max,
      rainSum: daily?.rain_sum,
      windspeed10mMax: daily?.windspeed_10m_max,
      windgusts10mMax: daily?.windgusts_10m_max,
      sunrise: daily?.sunrise,
      sunset: daily?.sunset,
      showersSum: daily?.showers_sum
    }
  }

  get dailyObjs() {
    const length = this.rawData.daily.time.length;
    const {
      temperature2mMax,
      temperature2mMin,
      uvIndexMax,
      rainSum,
      windspeed10mMax,
      windgusts10mMax,
      sunrise,
      sunset,
      showersSum
    } = this.daily;
    const newArr = new Array(length).fill(null).map((ele, index) => ({
      rainSum: {
        value: rainSum ? rainSum[index] : null,
        unit: this.dailyUnits?.rainSum
      },
      showersSum: {
        value: showersSum ? showersSum[index] : null,
        unit: this.dailyUnits?.showersSum
      },
      sunrise: {
        value: sunrise ? sunrise[index] : null,
        unit: this.dailyUnits?.sunrise
      },
      sunset: {
        value: sunset ? sunset[index] : null,
        unit: this.dailyUnits?.sunset
      },
      temperature2mMax: {
        value: temperature2mMax ? temperature2mMax[index] : null,
        unit: this.dailyUnits?.temperature2mMax
      },
      temperature2mMin: {
        value: temperature2mMin ? temperature2mMin[index] : null,
        unit: this.dailyUnits?.temperature2mMin
      },
      uvIndexMax: {
        value: uvIndexMax ? uvIndexMax[index] : null,
        unit: this.dailyUnits?.uvIndexMax
      },
      windgusts10mMax: {
        value: windgusts10mMax ? windgusts10mMax[index] : null,
        unit: this.dailyUnits?.windgusts10mMax
      },
      windspeed10mMax: {
        value: windspeed10mMax ? windspeed10mMax[index] : null,
        unit: this.dailyUnits?.windspeed10mMax
      },
      time: { value: this.rawData.daily.time[index], unit: '' }
    }));
    return newArr;
  }

  get hourlyObjs() {
    const length = this.rawData.hourly.time.length;
    const {
      apparentTemperature,
      dewpoint2m,
      rain,
      relativehumidity2m,
      shortwaveRadiation,
      temperature2m,
      time,
      windgusts10m
    } = this.hourly;
    const hourlyUnits = this.hourlyUnits;
    const newArr = new Array(length).fill(null).map((ele, index) => ({
      apparentTemperature: {
        value: apparentTemperature ? apparentTemperature[index] : null,
        unit: hourlyUnits.apparentTemperature
      },
      dewpoint2m: {
        value: dewpoint2m ? dewpoint2m[index] : null,
        unit: hourlyUnits.dewpoint2m
      },
      rain: {
        value: rain ? rain[index] : null,
        unit: hourlyUnits.rain
      },
      relativehumidity2m: {
        value: relativehumidity2m ? relativehumidity2m[index] : null,
        unit: hourlyUnits.relativehumidity2m
      },
      shortwaveRadiation: {
        value: shortwaveRadiation ? shortwaveRadiation[index] : null,
        unit: hourlyUnits.shortwaveRadiation
      },
      temperature2m: {
        value: temperature2m ? temperature2m[index] : null,
        unit: hourlyUnits.temperature2m
      },
      windgusts10m: {
        value: windgusts10m ? windgusts10m[index] : null,
        unit: hourlyUnits.windgusts10m
      },
      time: {
        value: time ? time[index] : null,
        unit: hourlyUnits.time
      },
    }));
    return newArr;
  }
}