import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable
 } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl ="";
  readonly PhotoUrl = "";

  constructor(private http:HttpClient) { }

  getPhotoList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl +'/Photos');
  }

  uploadPhoto(val:any){
    return this.http.post(this.APIUrl +'/Photos/SaveFile', val);
  }


  updatePhoto(val:any){
    return this.http.post(this.APIUrl +'/Photos', val);
  }

  deletePhoto(val:any){
    return this.http.post(this.APIUrl +'/Photos/', val);
  }


  getAlbumList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl +'/Album');
  }

  addAlbum(val:any){
    return this.http.post(this.APIUrl +'/Album', val);
  }


  updateAlbum(val:any){
    return this.http.post(this.APIUrl +'/Album', val);
  }

  deleteAlbum(val:any){
    return this.http.post(this.APIUrl +'/Album/', val);
  }
}