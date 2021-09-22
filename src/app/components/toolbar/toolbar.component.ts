import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'bmg-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() menuClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}