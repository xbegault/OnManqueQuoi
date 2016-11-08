import { Component } from '@angular/core';
import {FoodService} from "./food.service";
import {Food} from "./food";

@Component({
    selector: 'my-app',
    templateUrl: 'app/onmangequoicemidi.html',
    providers: [
        FoodService,
    ]
})

export class AppComponent {
    food = new Food;
    foods = [];


    constructor(private foodService:FoodService) {
        this.foods = this.foodService.getFoods();
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    whatFood() {
        this.food = this.foods[this.getRandomInt(0, this.foods.length-1)];
    }
}
