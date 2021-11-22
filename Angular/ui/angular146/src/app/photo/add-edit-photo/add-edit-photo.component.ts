import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-photo',
  templateUrl: './add-edit-photo.component.html',
  styleUrls: ['./add-edit-photo.component.css']
})
export class AddEditPhotoComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() photo:any;
  PhotoID:string | undefined;
  PhotoName:string | undefined;
  PhotoFilePath:string | undefined;
  DateOfUpload:string | undefined;
  Album:String | undefined;
  Username:String | undefined;


  ngOnInit(): void {
    this.PhotoID=this.photo.PhotoID;
    this.PhotoName=this.photo.PhotoName;
  }

 // loadAlbum

  addPhoto(){
    var val = {PhotoID:this.PhotoID,
              PhotoName:this.PhotoName,
            username:this.Username,
          DateOfUpload:this.DateOfUpload};
      this.service.addPhotos(val).subscribe(res=>{
        alert(res.toString)});
      }

      uploadPhoto(event:any){
        var file=event.target.files[0];
        const formData:FormData=new FormData();
        formData.append('uploadFile',file,file.name);

        this.service.UploadPhoto(formData).subscribe((data:any)=>{
          this.PhotoName=data.toString();
          this.PhotoFilePath=this.service.PhotoUrl+this.PhotoName;
        })
      }

  updatePhoto()
  {
    var val = {PhotoID:this.PhotoID,
      PhotoName:this.PhotoName};
this.service.updatePhoto(val).subscribe(res=>{
alert(res.toString)});}

}
