import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  animals: Animal[];

  constructor() { 
    this.animals = [
      {
        name: "cat",
        sound: "maow!"
      },
      {
        name: "dog",
        sound: "wof!"
      },
      {
        name: "fish",
        sound: "...!"
      }
    ]
  }

  getAnimals(){
    return this.animals;
  }
}

export interface Animal {
  name: string,
  sound: string
}