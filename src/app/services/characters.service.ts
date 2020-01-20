import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Character } from 'src/app/models/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private httpClient: HttpClient) { }

  getData(id): Observable<Character> {
    return this.httpClient.get<Character>(`${api.url}characters/${id}?ts=1&apikey=${api.credentials.apiKey}&hash=${api.credentials.hash}`)
    .pipe(map((data: any) => data.data.results));
  }
}
