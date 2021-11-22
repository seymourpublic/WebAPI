import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { PhotoComponent } from './photo/photo.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  {path: 'photos', component: PhotoComponent},
  {path: 'Album', component: AlbumComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
