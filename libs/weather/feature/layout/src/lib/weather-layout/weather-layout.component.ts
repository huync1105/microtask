import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatChipListboxChange } from '@angular/material/chips';
import { ForeCast, GeoLocation } from '@mfeng/shared/core/class';
import { ForecastOptions } from '@mfeng/shared/core/constant';
import { ISearhForeCastOpt } from '@mfeng/shared/core/interface';
import { WeatherDataService } from '@mfeng/weather/data-access';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'mfeng-weather-layout',
  templateUrl: './weather-layout.component.html',
  styleUrls: ['./weather-layout.component.scss'],
})
export class WeatherLayoutComponent implements OnInit, OnDestroy {

  destroy$ = new Subject<void>();
  searchForm: FormControl = new FormControl(null,Validators.required);
  currentLocations!: GeoLocation[];
  foundLocation!: GeoLocation;
  isSearchBoxShown = false;
  forecast!: ForeCast;
  dailySetting!: string;
  hourlySetting!: string;
  dailyOptions = new ForecastOptions().dailys;
  hourlyOptions = new ForecastOptions().hourlys;
  isLoading = false;

  constructor(private weatherData: WeatherDataService) { }

  ngOnInit(): void {
    this.dailySetting = this.dailyOptions.filter(opt => opt.isSelected).map(opt => opt.value).join(',');
    this.hourlySetting = this.hourlyOptions.filter(opt => opt.isSelected).map(opt => opt.value).join(',');
  }

  searchLocation() {
    if (this.searchForm.valid) {
      this.isSearchBoxShown = true;
      this.weatherData.searchLocation(this.searchForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          this.currentLocations = res;
        }
      });
    } else {
      this.searchForm.markAllAsTouched();
    }
    
  }

  getWeatherStatus(location: GeoLocation) {
    this.isSearchBoxShown = false;
    this.isLoading = true;
    this.foundLocation = location;
    const {latitude, longitude, timezone} = this.foundLocation;
    const option: ISearhForeCastOpt = {
      daily: this.dailySetting,
      hourly: this.hourlySetting,
      latitude,
      longitude,
      timezone
    } 
    this.weatherData.getWeatherForecast(option)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          this.forecast = res;
          console.log("this.forecast", this.forecast);
        },
        complete: () => {
          this.isLoading = false;
        }
      })
  }

  changeOptionSetting(event: MatChipListboxChange, isDaily = true) {
    if (this.foundLocation) {
      if (isDaily) {
        this.dailySetting = event.value.join(',');
      } else {
        this.hourlySetting = event.value.join(',');
      }
      this.getWeatherStatus(this.foundLocation);
    }
  } 

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
