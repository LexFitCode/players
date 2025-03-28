import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import * as icons from '../../../assets/icons.json'

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  @Input() games: any
  @Output() newItemEvent = new EventEmitter<any>();
  playersToFollowPersonalData: any[] = [];
  playersIcons: any = [];
  constructor(private PlayersService: PlayersService,) { }

  ngOnInit(): void {
    this.setIconsApi()
    //this.playersIcons = Object.values(icons) //offline
  }
  setIconsApi(){
    this.PlayersService.getIcons().subscribe((data)=>{
      this.playersIcons = data
    })
  }
  playersToFollow(home: string, away: string) {
    console.log(home, away)
    this.playersToFollowPersonalData = [];
    const names = this.playersIcons;
    for (const property in names) {
      const team = names[property].team;
      if (home !== undefined || away !== undefined) {
        if (team?.includes(home) || team?.includes(away)) {
          this.playersToFollowPersonalData.push(names[property]);
        }
      }
    }
    this.newItemEvent.emit(this.playersToFollowPersonalData)
  }

}
