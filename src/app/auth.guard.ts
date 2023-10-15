import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IngresadoGuard {
  constructor(public navCtrl: NavController){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('ingresado')){
        return true;
      }else{
        this.navCtrl.navigateRoot('login')
        return false;
      }
    
  }
  
};

@Injectable({
  providedIn: 'root'
})
export class noIngresadoGuard  {
  constructor(private navCtrl: NavController) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('ingresado')) {
      this.navCtrl.navigateRoot('home');
      console.log("Redirected to 'home' because user is already logged in.");
      return false;
    } else {
      console.log("User is not logged in.");
      return true;
    }
  }
}

