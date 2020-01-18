import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutCharacterComponent } from './components/about-character/about-character.component';


const routes: Routes = [
  { path: 'about/1010338', component: AboutCharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
