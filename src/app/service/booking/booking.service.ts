import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../../model/class/Booking';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  apiURL : string ='http://localhost:8080/api/bookings/';

  constructor(private http: HttpClient ){  }

  getAllBookings() {
    return this.http.get(this.apiURL+"getallbookings");
  }

  createBooking(obj:Booking ){
    return this.http.post(this.apiURL+ "booking",obj);
  }

  getBookingById(id:number){
    return this.http.get(this.apiURL+"getbooking/"+id);
  }
}
