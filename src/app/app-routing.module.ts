import { MusicComponent } from './music/music.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library/library/library.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'customer' },
  { path: 'music', component: MusicComponent },
  { path: 'library', component: LibraryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
