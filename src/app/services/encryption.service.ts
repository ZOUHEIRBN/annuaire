import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import JSEncrypt from 'jsencrypt';
import * as jwt from 'jsonwebtoken'
// import base64url from "base64url";
@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  rsa = new JSEncrypt()

  constructor(private httpClient: HttpClient) {
    this.rsa.setPrivateKey(`
      MIIEpAIBAAKCAQEAt6vPPyknchoX2JdVKwNSHfuwwx+On+4kUe6NotjKAO2t+jEM
      bwjpbevN4lAvrbIS7GOQ+5IxQUWh8jPJ9e4oytYptWqDzGDLi2az6KdUbFIE1gG6
      7u2ZFB9IHVBGjQcnUPY7Qjk5dx95NT7sqp/lTkP4Kx+68K3jth+hahYmNk6hMTfu
      nQ0JUIcRf3OXa02R/AGlH8ll1Bv/Gjmo8h9SeuJdzzY5QnTawPmbDf008jrxRmME
      6QA8Pbx/1UwR+7riIaXvqJfRfd4KMSmmmT/jaLEZD9qwkGLG/L9enlXuJzbsDYS6
      9GSujYLgHo0Q6+8JJGKHZsJOfwtSKpL9BT1uYwIDAQABAoIBAGciUn1k3oFzpXA5
      idldQ/8SFW97iNrFHh/jlCSdFtDupYKXiCPRHUJb5n/uBtfB5l5WilK5BG9iak1W
      R1GRKda76y+zX86ji6f7Q4qgawdoBs8kqZMAV7S03AmZygPmwGz11tCY0WvSgH0l
      mD83Ccuo3vFYH+CFxBfAKyMmzM4w5NesQWkJvT3BGNsMrthQ2M7CN4wDXo/ASYx/
      mRXuT8sXk0NuZm5+6ZgrqzjW2bS3Xnx0rbUY0gWsCMnYi2JYNgPsLSPG9dJh0GYz
      ERyCGr4QSg82XhKIgUI/DleIhRiQrbgVEglLdEPlRscx5z75tMm9h0yPq0vfZyY9
      FjNRcAECgYEA5oyL/PQA7jnXWw0uKEcLtcztLuvkMjXSOq8EhjvmIlD7072+fep9
      OUI+ogqzb0STdMzRmgvFtzpRM/uLMwwBDdIUCDd87PmvSXltSa3qJ06Eg96BWSTK
      1iVxxHdxeAHEmMUodUc+I7vTchA5gNAkI0bmCuKvNVVdT+Ohuau/kyECgYEAy/J3
      O90PZrkzyPMfhZcgIIcLg3XSpsvuUlqrv0dQE7c0r7lNlxR6zWk2RjoJFi6mBFnT
      BCxuj3yIIoQKLxxx+tlZdyLUXsZbCFeLcxJhXwz2p6w53Hp2aWuO7wgDbXT9MH6o
      VX4ylIHQTT7n8UVp7Pb1d4xfu3m+kn0BwspNFQMCgYEA2yebIrdn8wy0tG7RA6SV
      cxn8FPBTmY8j6njYWimyV8iXue3SmKtAoh9gnnSBoTGU4iCY1lB+f/BFpJ5m8f1l
      OxgJxs3ISRQIFlYBF1rlDLxMp3Xpiy24StyJSvMnv6YelgJEtUclwJ4ZH4JgxxwU
      XhxVLN/TIWWmL/z4jSDAGUECgYEAiq/JMSY0UPBkLKRXrSqFqFjtFWpL4y0OVWZf
      IGXIKIAPDef+wVwl3gVL6RmSEEmMj6zdeBsW2/AdSwtrOXoocCLZWdCPhhtw0A1o
      QMog+NgB6yeM+Uc1up5vxlA2tHo3qoCWy/xTPPXBxqWeaE2BqKiPZ8pHV1+Enmzv
      g5y6Ki0CgYAFBpLCataAtG1TGmrvX1zlXeKn/Tyss9i8kwShqWot3pOi0WYqWV0h
      CHfT5JSKs1qqYxTGjRAYukwDiWXCoasP8zh4RiZJgnf3yedvWYRX5s0SfJ5KTS1x
      sBFFI03aVIL9alQw5OyG5DlR7IVOw4xD2hXdHiz4TV9vZ1J8mUAzGQ==
    `)
  }


  public encrypt(string=''){
    return this.rsa.encrypt(string).toString()
  }

  public decrypt(string=''){
    return this.rsa.decrypt(string).toString()
  }

  getJWTToken(){
    // this.httpClient.get("http://example.com/api/things").subscribe(
    //   (data) => console.log(data),
    //   (err) => console.log(err)
    // );
    let Y = Base64URLEncode({
      "alg": "RS256",
      "typ": "JWT"
      }) + '.' + Base64URLEncode(payload)
    jwt.sign({
      data: 'foobar'
    }, this.rsa.getPrivateKey(), { expiresIn: '1h',  });
  }
}
