import { Component, inject, OnInit } from '@angular/core';
import { BookingService } from '../../service/booking/booking.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-view-booking',
  standalone: true,
  imports: [],
  templateUrl: './admin-view-booking.component.html',
  styleUrl: './admin-view-booking.component.css'
})
export class AdminViewBookingComponent implements OnInit {

  bookingService= inject(BookingService);
  
  bookingList : any[]=[];

  ngOnInit(): void {
    this.getAllBookings();
  }

  getAllBookings(){
    this.bookingService.getAllBookings().subscribe((res:any)=>{
      console.log(res);
      
      this.bookingList=res;
    })
  }

  constructor(private router: Router) { }

  viewItem(id: string): void {
    this.router.navigate(['/assignservice', id]);
  }

}
