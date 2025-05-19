import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(
    private service: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Check if the user is logged in
    if (this.service.isloggedin()) {
      const menu = route.url.length > 0 ? route.url[0].path : '';

      // Check if accessing the 'user' page
      if (menu === 'user') {
        if (this.service.getrole() === 'admin') {
          // Allow access if role is admin
          return true;
        } else {
          // If logged in as customer, restrict access
          this.router.navigate(['']);
          this.toastr.warning('🔒 Only Admin can access this page. If you are an Admin, log in with your Admin ID.');
          this.playNotificationSound(); // 🔊 Play sound
          return false;
        }
      }
      // Allow access for all other routes
      return true;
    } else {
      
      this.toastr.info('🔐 You have to log in as Admin to see user information.');
      this.playNotificationSound(); // 🔊 Play sound
      return false;
    }
  }

  // 🔊 Sound Notification
  playNotificationSound() {
    const audio = new Audio();
    audio.src = 'assets/sounds/bip.mp3'; // Make sure this path is correct
    audio.load();
    audio.play();
  }
}
