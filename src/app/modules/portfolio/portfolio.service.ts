import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { LoginService } from '../authentication/login.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private loginService: LoginService, private http: HttpClient) { }

  addToPortfolio(stock: string, quantity: number, price: number) {
    return this.http.post('https://stockplan-backend.herokuapp.com/portfolio', {
      stock,
      quantity,
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
    return this.http.get('https://stockplan-backend.herokuapp.com/portfolio', {
      headers: {
        authentication: 'Bearer ' + this.loginService.getLoginToken()
      }
    }).pipe(map(res => {
        let resData;
        resData = {...res};
        return resData;
      }));
  }

  delete(id: string) {
    return this.http.delete('https://stockplan-backend.herokuapp.com/portfolio/' + id, {
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
