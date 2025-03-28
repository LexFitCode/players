import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PitchersService {
  private _url = 'https://lexfitcode.github.io/dummieweb/lm/pitchers.json'
  private _urlvsPitcher = 'https://lexfitcode.github.io/dummieweb/lm/pitchersVs.json'
  constructor( private http:HttpClient ) { }
  getPitchers(): Observable<any> {
    return this.http.get<any>(this._url)
  }
  getPitcherVs(): Observable<any> {
    return this.http.get<any>(this._urlvsPitcher)
  }

}
