import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutCharacterComponent } from './components/about-character/about-character.component';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';


const routes: Routes = [
  { path: 'about/:id', component: AboutCharacterComponent},
  { path: '**', component: ListCharactersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
