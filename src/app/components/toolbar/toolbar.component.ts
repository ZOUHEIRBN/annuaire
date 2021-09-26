import { HttpClient } from '@angular/common/http';
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

  constructor(private _authService:AuthenticationService, private _esvc:EncryptionService, private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  callVendastaAPI(){
    let str = "Zouheir"
    let jwt_token = this._esvc.getJWTToken({
      username: str,
      password: "hello"
    })

    this._esvc.getOAuthToken().subscribe(e => {
      console.log(e)
    })
  }


}
