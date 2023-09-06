import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ForeCast, GeoLocation } from '@mfeng/shared/core/class';
import { WeatherApi } from '@mfeng/shared/core/constant';
import { IForecastRespons, IGeoLocationRaw, ISearhForeCastOpt } from '@mfeng/shared/core/interface';
import { catchError, map, of, throwError } from 'rxjs';

export interface ISearchLocationResponse {
  generationtime_ms: number, 
  results: IGeoLocationRaw[]
}

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private http: HttpClient) { }

  searchLocation(name: string) {
    const apiUri = `${WeatherApi.geoCodingSearchApi}?name=${name}`;
    // console.log("apiUri", apiUri)
    return this.http.get<ISearchLocationResponse>(apiUri).pipe(
      map(res => {
        if (res.results) {
          const newLocations = res.results.map(location => new GeoLocation(location));
          return newLocations;
        }
        return []
      }),
      catchError(res => throwError(() => res))
    );
  }

  getWeatherForecast(option: ISearhForeCastOpt) {
    const apiUri = `${WeatherApi.forecastSearchApi}?hourly=${option.hourly}&daily=${option.daily}&timezone=${option.timezone}&latitude=${option.latitude}&longitude=${option.longitude.toFixed()}`;
    console.log("apiUri", apiUri);
    return this.http.get<IForecastRespons>(apiUri)
      .pipe(
        map(res => {
          const newForeCastObj = new ForeCast(res);
          return newForeCastObj;
        }),
        catchError(error => throwError(() => error))
      )
  }
}
