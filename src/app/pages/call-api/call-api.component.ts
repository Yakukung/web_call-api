import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { TripsGetResponse } from '../../model/trip_get_res';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-call-api',
  standalone: true,
  imports: [CommonModule, MatButtonModule, HttpClientModule, MatFormFieldModule, MatInputModule],
  templateUrl: './call-api.component.html',
  styleUrl: './call-api.component.scss',
})
export class CallApiComponent {
// trips: any;
trips : TripsGetResponse[] = [];
  constructor(private http: HttpClient) {}
  // callApi() {
  //   const url = 'http://202.28.34.197/tripbooking/trip';
  //   this.http.get(url).subscribe((data: any) => {
  //     console.log(data);
  //   });
  // }

  async callApi() {
    const url = 'http://202.28.34.197/tripbooking/trip';
    let data = await /*firstValueFrom หรือ */ lastValueFrom(this.http.get(url));
    this.trips = data as TripsGetResponse[];
    console.log(this.trips);
    console.log(this.trips[0].name);

    console.log('Call Completed');
  }

  async findOne(id: HTMLInputElement) {
    console.log(id);
    const url = `http://202.28.34.197/tripbooking/trip/${id}`;
    let data = await lastValueFrom(this.http.get(url));
    this.trips = data as TripsGetResponse[];
    console.log(this.trips);
    console.log(this.trips[0].name);
    console.log('Call Completed');
  }

  async findName(input: HTMLInputElement) {
    console.log(input.value);
    const url = 'http://202.28.34.197/tripbooking/trip';
    let data = await lastValueFrom(this.http.get(url, {
        params: {
          name: input.value
        },
      })
    );
    this.trips = data as TripsGetResponse[];
    console.log(this.trips);
    console.log(this.trips[0].name);
    console.log('Call Completed');
  }
}