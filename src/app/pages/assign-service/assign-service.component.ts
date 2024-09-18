import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../../service/booking/booking.service';
import { Booking } from '../../model/class/Booking';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assign-service',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './assign-service.component.html',
  styleUrl: './assign-service.component.css'
})
export class AssignServiceComponent implements OnInit{

  id: number=0;
  booking : any;


  bookingService =inject(BookingService);

  constructor(private route: ActivatedRoute){}  
  
  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') ?? '', 10);   
    this.getBookingById();
    
  }

  getBookingById(){
    this.bookingService.getBookingById(this.id).subscribe((res:any)=>{
      //console.log(res);
      this.booking=res;

      console.log(this.booking);
      
    })
  }


}

