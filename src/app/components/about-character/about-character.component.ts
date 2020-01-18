import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { Character } from 'src/app/models/models';

@Component({
  selector: 'app-about-character',
  templateUrl: './about-character.component.html',
  styleUrls: ['./about-character.component.sass']
})
export class AboutCharacterComponent implements OnInit {

  private character: Character;
  
  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.charactersService.getData().subscribe(response => {
      this.character = response;
      console.log(this.character)
    })
  }

}
