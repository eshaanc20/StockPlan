import { Injectable } from '@angular/core';
import { LoginService } from '../authentication/login.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private loginService: LoginService) { }

  addToPortfolio() {
    
  }
}
