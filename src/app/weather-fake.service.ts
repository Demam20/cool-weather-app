import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICurrentWeather } from './icurrent-weather';
import { IWeatherService } from './iweather-service';

@Injectable({
  providedIn: 'root'
})
export class WeatherFakeService implements IWeatherService{
  private fakeWeather: ICurrentWeather = {
    city: 'Cairo',
    country:'Egypt',
    date:1485789600,
    image:'',
    temperature: 280.32,
    description:'light sunny'
  }

  constructor() { }
  public getCurrentWeather(searchText: string | number, country?: string): Observable<ICurrentWeather>{
    return of(this.fakeWeather);
  }
   
}
