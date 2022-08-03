/* eslint-disable eqeqeq */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  logged=false;
  constructor(private router: Router, private login: LoginService) {
    if((localStorage.getItem('UserName')) && (localStorage.getItem('Password')) ){
      console.log('Logged');
      this.logged=true;
      this.router.navigateByUrl('/');
    }else{
      console.log('Not Logged');
      this.router.navigateByUrl('login');
    }

  }
  ngOnInit(): void {
  }
  fun(val){

    // console.log(val.value);
    // // eslint-disable-next-line eqeqeq
    // if(val.value.username=='anish16bd@gmail.com' && val.value.password=='1234'){
    //   localStorage.setItem('username', val.value.username);
    //   localStorage.setItem('password', val.value.password);
    //   console.log('Login Successfully!!!');
    //   this.logged=true;
    //   this.router.navigateByUrl('/');
    // }else{
    //   console.log('Something went wrong!!!');
    //   this.router.navigateByUrl('login');
    // }
    this.login.login(val.value).subscribe((res: any)=>{
      console.log(res);
      if(res.status){
      localStorage.setItem('UserName', val.value.UserName);
      localStorage.setItem('Password', val.value.Password);
      this.router.navigateByUrl('/');
      }else{
        console.log('Something went wrong!!!');
      }
    });
  }



}
