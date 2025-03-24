import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private _url = 'https://lexfitcode.github.io/dummieweb/icons.json'

  constructor( private http:HttpClient ) { }
  getIcons(): Observable<any> {
    return this.http.get<any>(this._url)
  }
}
