import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-photos',
  templateUrl: './show-photos.component.html',
  styleUrls: ['./show-photos.component.css']
})
export class ShowPhotosComponent implements OnInit {

  constructor(private service:SharedService) { }

  PhotoList:any=[];

  ngOnInit(): void {
    this.refreshPhotoList();
  }

  refreshPhotoList()
  {
    this.service.getPhotoList().subscribe(data=>{
      this.PhotoList=data;
    })
  }

}
