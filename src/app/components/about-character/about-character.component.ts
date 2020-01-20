import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { Character } from 'src/app/models/character';
import { StoriesService } from 'src/app/services/stories.service';
import { Storie } from 'src/app/models/stories';

@Component({
  selector: 'app-about-character',
  templateUrl: './about-character.component.html',
  styleUrls: ['./about-character.component.sass']
})
export class AboutCharacterComponent implements OnInit {

  private character: Character;
  private stories: Storie[] = [];
  private characterOfHistories: Character[] = [];
  
  constructor(private charactersService: CharactersService, private storieService: StoriesService) { }

  ngOnInit() {
    this.getData();
  }

  getCharacter(storie: Storie) {
    storie.characters.items.forEach(item => {
      this.charactersService.getData(item.resourceURI.split('characters/')[1]).subscribe(character => {
        this.characterOfHistories.push(character[0]);
      })
    })
  }

  getData() {
    this.charactersService.getData(1010338).subscribe(response => {
      this.character = response[0];
      response[0].stories.items.forEach(item => {
        this.storieService.getData(item.resourceURI).subscribe(storie => {
          this.stories.push(storie[0]);
        })
      })
    })
  }

}
