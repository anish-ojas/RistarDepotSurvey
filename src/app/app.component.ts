import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}
  logout(){
    localStorage.removeItem('UserName');
    localStorage.removeItem('Password');
    // this.logged=false;
    this.router.navigateByUrl('login');
  }
}
