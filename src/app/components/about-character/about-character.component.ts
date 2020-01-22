import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { MyObject, Results } from 'src/app/models/character';
import { StoriesService } from 'src/app/services/stories.service';
import { Storie } from 'src/app/models/stories';

@Component({
  selector: 'app-about-character',
  templateUrl: './about-character.component.html',
  styleUrls: ['./about-character.component.sass']
})
export class AboutCharacterComponent implements OnInit {

  private object: MyObject;
  private stories: Storie;
  private characterOfHistories: Results[] = [];
  
  constructor(private charactersService: CharactersService, private storieService: StoriesService) { }

  ngOnInit() {
    this.getData();
  }

  getCharacter(storie: Storie) {
    this.characterOfHistories = [];
    storie.characters.items.forEach(item => {
      this.charactersService.getData(item.resourceURI.split('characters/')[1]).subscribe(character => {
        this.characterOfHistories.push(character.data.results[0]);
      })
    })
  }

  getData() {
    this.charactersService.getData(1010338).subscribe(response => {
      this.object = response;
      console.log(response.data.results[0].stories.items[0].resourceURI);
      this.storieService.getData(response.data.results[0].stories.items[0].resourceURI).subscribe(storie => {
        this.stories = storie;
      })
    })
  }

}
