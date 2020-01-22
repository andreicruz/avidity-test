import { Injectable } from '@angular/core';
import { Storie } from '../models/stories';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor(private httpClient: HttpClient) { }

  getData(url): Observable<Storie> {
    return this.httpClient.get<Storie>(`${url}?ts=1&apikey=${api.credentials.apiKey}&hash=${api.credentials.hash}`)
    .pipe(map((data: any) => data.data.results));
  }
}
