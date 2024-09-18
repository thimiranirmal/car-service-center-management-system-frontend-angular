
import { Component, inject } from '@angular/core';
import Swal from 'sweetalert2';
import { BookingService } from '../../service/booking/booking.service';
import { FormsModule } from '@angular/forms';
import { Booking } from '../../model/class/Booking';

@Component({
  selector: 'app-admin-booking',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-booking.component.html',
  styleUrl: './admin-booking.component.css'
})
export class AdminBookingComponent {

  bookingService = inject(BookingService);

  bookingObj : Booking=new Booking();

  createBooking(){
    debugger;
    this.bookingService.createBooking(this.bookingObj).subscribe((res:any)=>{
      if(res.vehicleMake != ""){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Booking Added",
          showConfirmButton: false,
          timer: 1500
        });
        
      }else{
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Failed",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }
}
