

export class Booking {
    bookingId: number
    customerId: number
    vehicleMake: string
    vehicleModel: string
    vehicleNo: string
    vehicleManufacturedYear: string
    bookingDate: string
    bookingTime: string
    bookingStatus: string
    message: string

    constructor(){
        this.bookingId=0;
        this.customerId=0;
        this.vehicleMake='';
        this.vehicleModel='';
        this.vehicleNo='';
        this.vehicleManufacturedYear='';
        this.bookingDate='';
        this.bookingTime='';
        this.bookingStatus='planned';
        this.message='';


    }
  }