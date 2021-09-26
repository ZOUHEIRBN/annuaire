import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { EncryptionService } from 'src/app/services/encryption.service';


@Component({
  selector: 'bmg-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() menuClick = new EventEmitter()

  constructor(private _authService:AuthenticationService, private _esvc:EncryptionService) { }

  ngOnInit(): void {
  }

  callVendastaAPI(){
    let str = "Zouheir"
    this._esvc.getJWTToken()
  }
  callVendastaAP(){
    let u = this._authService.login('test', 'test')
    u.subscribe(e => {
      console.log(e)
    })

  }

}
