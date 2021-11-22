import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PhotoComponent } from './photo/photo.component';
import { AlbumComponent } from './album/album.component';
import { ShowComponent } from './user/show/show.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { AddEditUserComponent } from './user/add-edit-user/add-edit-user.component';
import { DeletePhotoComponent } from './photo/delete-photo/delete-photo.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowPhotosComponent } from './photo/show-photos/show-photos.component';
import { ShowAlbumComponent } from './album/show-album/show-album.component';
import { AddEditPhotoComponent } from './photo/add-edit-photo/add-edit-photo.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PhotoComponent,
    AlbumComponent,
    ShowComponent,
    DeleteUserComponent,
    AddEditUserComponent,
    DeletePhotoComponent,
    ShowPhotosComponent,
    ShowAlbumComponent,
    AddEditPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
