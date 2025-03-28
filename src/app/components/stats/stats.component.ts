import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  @Input() name: string = ''
  @Input() player: any
  @Input() namePlayer: any
  @Input() coverLast: boolean = false
  @Input() coverVs: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
