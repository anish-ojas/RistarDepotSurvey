import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reefer',
  templateUrl: './reefer.component.html',
  styleUrls: ['./reefer.component.scss'],
})
export class ReeferComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  goTo(path: string){
    this.router.navigate([path]);
}

}
