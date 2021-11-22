import { ThisReceiver } from '@angular/compiler';
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

  ModalTitle:string | undefined;
  ActivateAddEditPhotoComp:boolean =false;
  photo:any;

  ngOnInit(): void {
    this.refreshPhotoList();
  }

  addClick(){
    this.photo={
      PhotoID:0,
      PhotoName:"",
      Username:"",

    }
    this.ModalTitle="upload photo";
    this.ActivateAddEditPhotoComp=true;
  }

  editClick(item: any)
  {
    this.photo=item;
    this.ModalTitle="Edit photo";
    this.ActivateAddEditPhotoComp=true;
  }

  closeClick()
  {
    this.ActivateAddEditPhotoComp=false;
    this.refreshPhotoList();
  }
  refreshPhotoList()
  {
    this.service.getPhotoList().subscribe(data=>{
      this.PhotoList=data;
    })
  }

}
