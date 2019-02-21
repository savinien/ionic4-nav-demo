import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-baby-lion',
  templateUrl: './baby-lion.page.html',
  styleUrls: ['./baby-lion.page.scss'],
})
export class BabyLionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navToZebra(){
    this.router.navigateByUrl('/zebra');
    console.log("nav to zebra page");
  }
}
