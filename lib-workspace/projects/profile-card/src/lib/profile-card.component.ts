import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  constructor() { }

  @Input() name: string;
  @Input() imageURL: string;
  @Input() age: string;
  @Input() address: string;
  @Input() status: string;

  ngOnInit(): void {
  }

}
