import { Component, OnInit } from '@angular/core';
import { HittersService } from '../../services/hitters.service';
import { PitchersService } from '../../services/pitchers.service';
@Component({
  selector: 'app-mlb',
  templateUrl: './mlb.component.html',
  styleUrls: ['./mlb.component.sass']
})
export class MlbComponent implements OnInit {
  hitters : any = []
  pitchers : any = []
  constructor(private HittersService: HittersService,
    private PitchersService: PitchersService
  ) { }

  ngOnInit(): void {
    this.setHittersApi()
    this.setPitchersApi()
  }
  setHittersApi(){
    this.HittersService.getHittersVsPitcherThrow().subscribe((data)=>{
      this.parse(data)
    })
  }
  setPitchersApi(){
    this.PitchersService.getPitcherVs().subscribe((data)=>{
      this.pitchers = (data)
      console.log(data)
    })
  }
  parse(data: any){
    for(let i = 0 ; i < data.length; i++){
      data[i].avg = parseFloat(data[i].avg)
      this.hitters.push(data[i])
    }
  }

}
