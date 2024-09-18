import { Component, inject, OnInit } from '@angular/core';
import { MakeService } from '../../service/make/make.service';
import { Make } from '../../model/interface/Make';

@Component({
  selector: 'app-manage-make',
  standalone: true,
  imports: [],
  templateUrl: './manage-make.component.html',
  styleUrl: './manage-make.component.css'
})
export class ManageMakeComponent implements OnInit{

  makeService = inject(MakeService);

  makeList : Make [] = [];

  ngOnInit(): void {
    this.getAllmake();
  }

  getAllmake(){
    this.makeService.getAllMakes().subscribe((res:Make[])=>{
      this.makeList = res;
    })
  }
}
