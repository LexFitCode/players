import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd-card',
  templateUrl: './odd-card.component.html',
  styleUrls: ['./odd-card.component.scss']
})
export class OddCardComponent implements OnInit {
  @Input() odd: any
  @Input() name : string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
