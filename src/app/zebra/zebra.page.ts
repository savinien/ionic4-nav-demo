import { Component, OnInit } from '@angular/core';
import { Animal, DataService } from '../services/data.service';

@Component({
  selector: 'app-zebra',
  templateUrl: './zebra.page.html',
  styleUrls: ['./zebra.page.scss'],
})
export class ZebraPage implements OnInit {

  animals: Animal[];
  title: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.animals = this.data.getAnimals();
    console.log("animals data retrieved from service: ", this.animals);
    this.title = "Welcome to zebra page!";
  }

  
}
