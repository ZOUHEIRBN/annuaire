import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'bmg-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() menuClick = new EventEmitter()

  constructor(private _authService:AuthenticationService) { }

  ngOnInit(): void {
  }

  callVendastaAPI(){
    let u = this._authService.login('test', 'test')
    u.subscribe(e => {
      console.log(e)
    })

  }

}
