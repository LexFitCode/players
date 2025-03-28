import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GamesmlbService {
  private _url = 'https://lexfitcode.github.io/dummieweb/lm/games.json'

  constructor( private http:HttpClient ) { }
  getGamesMlb(): Observable<any> {
    return this.http.get<any>(this._url)
  }

}
