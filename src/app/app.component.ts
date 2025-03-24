import { Component, OnInit } from '@angular/core';
import * as games from '../assets/games.json'
import { GamesService } from './services/games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    coverPointsLast = false
    coverPointsVs = false
    coverMayorPtsLast = false
    coverMayorPtsVs = false
    coverMenorPtsLast = false
    coverMenorPtsVs = false
    coverAssistLast = false
    coverAssistVs = false
    coverReboundLast = false
    coverReboundVs = false
    covertriplesLast = false
    covertriplesVs = false
    coverPointsReboundLast = false
    coverPointsReboundtVs = false
    coverAssistReboundLast = false
    coverAssistReboundVs = false
    coverPointsAssistLast = false
    coverPointsAssisttVs = false
    coverPointsAssistReboundLast = false
    coverPointsAssistReboundVs = false
  title = 'playerprops';
  playersIcons: any = [];
  public games: any = [];
  playerOddsB: any = [
    {
      points: {
        name: '',
        line: '',
        overOdd: '',
        underOdd: '',
      },
      assist: {
        name: '',
        line: '',
        overOdd: '',
        underOdd: '',
      },
      rebound: {
        name: '',
        line: '',
        overOdd: '',
        underOdd: '',
      },
      pra: {
        name: '',
        line: '',
        overOdd: '',
        underOdd: '',
      },
      pa: {
        name: '',
        line: '',
        overOdd: '',
        underOdd: '',
      },
      pr: {
        name: '',
        line: '',
        overOdd: '',
        underOdd: '',
      },
      ar: {
        name: '',
        line: '',
        overOdd: '',
        underOdd: '',
      },
      triples: {
        name: '',
        line: '',
        overOdd: '',
        underOdd: '',
      },
      menorPts: {
        name: '',
        line: '',
        overOdd: '',
        underOdd: '',
      },
      mayorPts: {
        name: '',
        line: '',
        overOdd: '',
        underOdd: '',
      },
    },
  ];
  playersToFollowPersonalData: any[] = [];
  namePlayer: string = '';
  nameTeam: string = '';
  lastFiveGamesStats: any = [];
  lastFiveGamesVersusStats: any = [];

  constructor(
    private GamesService: GamesService
  ){}
  ngOnInit(): void {
    this.setGamesApi()
    //this.games = Object.values(games) //offline
  }

  setGamesApi(){
    this.GamesService.getGames().subscribe((data)=>{
      this.games = data
    })
  }
  playersFromGames(players: any) {
    this.playersToFollowPersonalData = players
    this.playerOddsB = []
    this.namePlayer = ""
  }
  playerFromPlayer(player: string) {
    this.getOdds(player);
    this.coverPointsLast = this.setCover(this.playerOddsB.points.stats)
    this.coverPointsVs = this.setCover(this.playerOddsB.points.statsVs)
    this.coverMayorPtsLast = this.setCover(this.playerOddsB.mayorPts.stats)
    this.coverMayorPtsVs = this.setCover(this.playerOddsB.mayorPts.statsVs)
    this.coverMenorPtsLast = this.setCover(this.playerOddsB.menorPts.stats)
    this.coverMenorPtsVs = this.setCover(this.playerOddsB.menorPts.statsVs)

    this.coverAssistLast = this.setCover(this.playerOddsB.assist.stats)
    this.coverAssistVs = this.setCover(this.playerOddsB.assist.statsVs)

    this.coverReboundLast = this.setCover(this.playerOddsB.rebound.stats)
    this.coverReboundVs = this.setCover(this.playerOddsB.rebound.statsVs)

    this.covertriplesLast = this.setCover(this.playerOddsB.triples.stats)
    this.covertriplesVs = this.setCover(this.playerOddsB.triples.statsVs)

    this.coverPointsReboundLast = this.setCover(this.playerOddsB.pr.stats)
    this.coverPointsReboundtVs = this.setCover(this.playerOddsB.pr.statsVs)

    this.coverAssistReboundLast = this.setCover(this.playerOddsB.ar.stats)
    this.coverAssistReboundVs = this.setCover(this.playerOddsB.ar.statsVs)

    this.coverPointsAssistLast = this.setCover(this.playerOddsB.pa.stats)
    this.coverPointsAssisttVs = this.setCover(this.playerOddsB.pa.statsVs)

    this.coverPointsAssistReboundLast = this.setCover(this.playerOddsB.pra.stats)
    this.coverPointsAssistReboundVs = this.setCover(this.playerOddsB.pra.statsVs)

  }

  setCover(odds: any){
    let i = 0
    for(const property in odds){
        if(odds[property].cover){
          i = i +1
        }
    }
    return i >= 4
  }

  getOdds(name: string ) {
    for(const property in this.playersToFollowPersonalData){
      if(this.playersToFollowPersonalData[property].name === name){
        this.setOdds(this.playersToFollowPersonalData[property].odds)
      }
    }
  }
  setOdds(dataOdds: any) {
    const dataOddsB = dataOdds
     this.playerOddsB = []
    for (const property in dataOddsB) {
      this.namePlayer = dataOdds[property].finalName
      console.log(dataOdds[property])
     // this.nameTeam =
      switch (dataOdds[property].market) {
        case 'Puntos (+/-)':
          this.playerOddsB.points =({
            market: "Puntos",
            line: dataOdds[property].line,
            overOdd: dataOdds[property].overOdd,
            underOdd: dataOdds[property].underOdd,
            stats:dataOdds[property].stats,
            statsVs: dataOdds[property].statsVs
          });
        break;
          break;
        case 'Asistencias (+/-)':
          this.playerOddsB.assist =({
            market: "Asistencias",
            line: dataOdds[property].line,
            overOdd: dataOdds[property].overOdd,
            underOdd: dataOdds[property].underOdd,
            stats:dataOdds[property].stats,
            statsVs: dataOdds[property].statsVs
            });
          break;
        case 'Rebotes (+/-)':
          this.playerOddsB.rebound =({
            market: "Rebotes",
            line: dataOdds[property].line,
            overOdd: dataOdds[property].overOdd,
            underOdd: dataOdds[property].underOdd,
            stats:dataOdds[property].stats,
            statsVs: dataOdds[property].statsVs
          });
          break;
        case 'Triples (+/-)':
          this.playerOddsB.triples =({
            market: "Triples",
            line: dataOdds[property].line,
            overOdd: dataOdds[property].overOdd,
            underOdd: dataOdds[property].underOdd,
            stats:dataOdds[property].stats,
            statsVs: dataOdds[property].statsVs
          });
          break;
        case 'Puntos, asistencias y rebotes (+/-)':
          this.playerOddsB.pra =({
            market: "Puntos, asistencias y rebotes",
            line: dataOdds[property].line,
            overOdd: dataOdds[property].overOdd,
            underOdd: dataOdds[property].underOdd,
            stats:dataOdds[property].stats,
            statsVs: dataOdds[property].statsVs
          });
          break;
        case 'Asistencias y rebotes (+/-)':
          this.playerOddsB.ar =({
            market: "Asistencias y rebotes",
            line: dataOdds[property].line,
            overOdd: dataOdds[property].overOdd,
            underOdd: dataOdds[property].underOdd,
            stats:dataOdds[property].stats,
            statsVs: dataOdds[property].statsVs
          });
          break;
        case 'Puntos y rebotes (+/-)':
          this.playerOddsB.pr =({
            market: "Puntos y rebotes",
            line: dataOdds[property].line,
            overOdd: dataOdds[property].overOdd,
            underOdd: dataOdds[property].underOdd,
            stats:dataOdds[property].stats,
            statsVs: dataOdds[property].statsVs
          });
          break;
        case 'Puntos y asistencias (+/-)':
          this.playerOddsB.pa =({
            market: "Puntos y asistencias",
            line: dataOdds[property].line,
            overOdd: dataOdds[property].overOdd,
            underOdd: dataOdds[property].underOdd,
                        stats:dataOdds[property].stats,
            statsVs: dataOdds[property].statsVs
          });
          break;
          case 'Mayor cantidad de puntos':
            this.playerOddsB.mayorPts =({
              market: "Mayor cantidad de puntos",
              line: dataOdds[property].line,
              overOdd: dataOdds[property].overOdd,
              underOdd: dataOdds[property].underOdd,
                          stats:dataOdds[property].stats,
            statsVs: dataOdds[property].statsVs
            });
            break;
            case 'Menor cantidad de puntos':
              this.playerOddsB.menorPts =({
                market : 'Menor cantidad de puntos',
                line: dataOdds[property].line,
                overOdd: dataOdds[property].overOdd,
                underOdd: dataOdds[property].underOdd,
                            stats:dataOdds[property].stats,
            statsVs: dataOdds[property].statsVs
              });
              break;
        default:
          console.log('No existe esa odd');
      }
    }


  }


}
