import { Injectable }  from '@angular/core';
//import { Headers, Http } from '@angular/http';

//import 'rxjs/add/operator/toPromise';

import {FOODS} from "./mock-foods";

@Injectable()
export class FoodService {
    getFoods() {
        return FOODS;
    }
}