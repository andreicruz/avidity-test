import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { MyObject } from 'src/app/models/character';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.sass']
})
export class ListCharactersComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  positionTooltip = 'before';
  private offset = 0;
  private object: MyObject;

  constructor(private characterService: CharactersService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.characterService.getData(this.offset).subscribe(response => {
      this.object = response;
    });
  }

  nextPage() {
    this.offset = this.offset + 21;
    this.getData();
  }

  previousPage() {
    this.offset = this.offset - 21;
    this.getData();
  }

}
