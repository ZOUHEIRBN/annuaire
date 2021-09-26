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

    this.httpClient.post('https://developers.vendasta.com/api/v1/oauth/token/',
    {"grant_type":"urn:ietf:params:oauth:grant-type:jwt-bearer","assertion": jwt_token}).subscribe(e => {
      console.log(e)
    })
  }


}
