import { Component, OnInit } from '@angular/core';
import { faHome, faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  faHome = faHome;
  faList = faList;

  constructor() { }

  ngOnInit() {
  }

}
