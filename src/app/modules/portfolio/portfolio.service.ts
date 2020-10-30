import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { LoginService } from '../authentication/login.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private loginService: LoginService, private http: HttpClient) { }

  addToPortfolio(stock: string, shares: number, price: number) {
    return this.http.post('http://localhost:3000/portfolio', {
      stock,
      shares,
      price
    }, {
      headers: {
        authentication: 'Bearer ' + this.loginService.getLoginToken()
      }
    }).pipe(map(res => {
        let resData;
        resData = {...res};
        return resData;
      }));
  }

  getPortfolio() {
    return this.http.get('http://localhost:3000/portfolio', {
      headers: {
        authentication: 'Bearer ' + this.loginService.getLoginToken()
      }
    }).pipe(map(res => {
        let resData;
        resData = {...res};
        return resData;
      }));
  }
}
