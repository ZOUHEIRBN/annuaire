import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_URL } from './_helpers/apis';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements HttpInterceptor{

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log("Interception In Progress"); //SECTION 1
      const token: string = localStorage.getItem('token');
      req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
      req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
      return next.handle(req)


  }

  public get currentUserValue(): any {
      return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
      return this.http.post<any>(API_URL+`/users/authenticate`, { username, password })
          .pipe(map(user => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
              return user;
          }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }
}
