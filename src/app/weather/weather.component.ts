import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  constructor(private _https: HttpClient) {
    this.weatherchecks()

  }
  weathers: any;
  weatherchecks() {
    this._https.get('https://api.openweathermap.org/data/2.5/weather?q=London&limit=5&appid=275437e090e9effa37f717e72465a127')
      .subscribe((res: any) => {
        this.weathers = res;
        console.log(res);
      })
  }
}
