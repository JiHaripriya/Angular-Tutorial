import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {


  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients:Ingredient[] = [
    new Ingredient('Butter', 150),
    new Ingredient('Jam', 250),
    new Ingredient('Maggie Packet', 100)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
