import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { MyObject, Results } from 'src/app/models/character';
import { StoriesService } from 'src/app/services/stories.service';
import { Storie } from 'src/app/models/stories';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-character',
  templateUrl: './about-character.component.html',
  styleUrls: ['./about-character.component.sass']
})
export class AboutCharacterComponent implements OnInit {

  private object: MyObject;
  private stories: Storie;
  private characterOfHistories: Results[] = [];

  constructor(private charactersService: CharactersService,
              private storieService: StoriesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getData();
  }

  getCharacter(storie: Storie) {
    this.characterOfHistories = [];
    storie.characters.items.forEach(item => {
      this.charactersService.getCharacter(item.resourceURI.split('characters/')[1]).subscribe(character => {
        this.characterOfHistories.push(character.data.results[0]);
      });
    });
  }

  getData() {
    this.charactersService.getCharacter(this.route.snapshot.paramMap.get('id')).subscribe(response => {
      this.object = response;
      this.storieService.getData(response.data.results[0].stories.items[0].resourceURI).subscribe(storie => {
        this.stories = storie;
      });
    });
  }

}
