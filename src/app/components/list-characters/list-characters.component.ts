import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { MyObject } from 'src/app/models/character';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.sass']
})
export class ListCharactersComponent implements OnInit {
  private offset: number = 0;
  private object: MyObject;

  constructor(private characterService: CharactersService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.characterService.getData(this.offset).subscribe(response => {
      console.log(response.data.results)
      this.object = response;
    })
  }

  teste() {
    this.offset = this.offset + 21;
    this.getData();
  }

}
