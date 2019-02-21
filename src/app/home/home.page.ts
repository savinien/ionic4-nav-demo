import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title: string = "Welcome to the zoo!";

  constructor(private router: Router){
  }

  navToZebra(){
    this.router.navigateByUrl('/zebra');
    console.log("nav to zebra page");
  }
}
