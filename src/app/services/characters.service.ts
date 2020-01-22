import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from 'src/environments/environment';
import { MyObject } from 'src/app/models/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private httpClient: HttpClient) { }

  getData(id): Observable<MyObject> {
    return this.httpClient.get<MyObject>(`${api.url}characters/${id}?ts=1&apikey=${api.credentials.apiKey}&hash=${api.credentials.hash}`);
  }
}
