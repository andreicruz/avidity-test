import { Component, OnInit, AfterContentInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { Character } from 'src/app/models/character';
import { StoriesService } from 'src/app/services/stories.service';
import { Storie } from 'src/app/models/stories';

@Component({
  selector: 'app-about-character',
  templateUrl: './about-character.component.html',
  styleUrls: ['./about-character.component.sass']
})
export class AboutCharacterComponent implements OnInit, AfterContentInit {

  private character: Character;
  private stories: Storie[] = [];
  
  constructor(private charactersService: CharactersService, private storieService: StoriesService) { }

  ngOnInit() {
    // this.stories = [];
    this.getData();
  }

  ngAfterContentInit() {
    console.log(this.stories);
    
  }

  getData() {
    // this.stories = []
    this.charactersService.getData().subscribe(response => {
      this.character = response[0];
      response[0].stories.items.forEach(item => {
        this.storieService.getData(item.resourceURI).subscribe(storie => {
          this.stories.push(storie[0]);
        })
      })
    })
  }

}
