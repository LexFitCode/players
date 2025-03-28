import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HittersService {
  private _url = 'https://lexfitcode.github.io/dummieweb/lm/hitters.json'
  private _urlvsPitcher = 'https://lexfitcode.github.io/dummieweb/lm/hittersVsPitcher.json'
  private _urlvsPitcherThrow = 'https://lexfitcode.github.io/dummieweb/lm/hittersVsPitcherThrow.json'
  constructor( private http:HttpClient ) { }
  getHitters(): Observable<any> {
    return this.http.get<any>(this._url)
  }
  getHittersVsPitcher(): Observable<any> {
    return this.http.get<any>(this._urlvsPitcher)
  }
  getHittersVsPitcherThrow(): Observable<any> {
    return this.http.get<any>(this._urlvsPitcherThrow)
  }
}
