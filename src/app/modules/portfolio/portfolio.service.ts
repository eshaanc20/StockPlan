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
    return this.http.post('http://localhost:3000/portfolio', {
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

  delete(id: string) {
    return this.http.delete('http://localhost:3000/portfolio/' + id, {
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
