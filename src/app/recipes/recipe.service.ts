import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipes } from './recipes.model';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  recipesChanged = new Subject<Recipes[]>();

  // Recipe model
  private recipes: Recipes[] = [
    new Recipes('Bread', 
                'Made from wheat', 
                'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Fresh_made_bread_05.jpg/1024px-Fresh_made_bread_05.jpg', 
                [new Ingredient('Flour', 120), new Ingredient('Baking Powder', 100)]),
    new Recipes('Maggie', 
                'Delicious noodles', 
                'https://images.mygoodtimes.in/wp-content/uploads/2018/08/31063759/iStock-643845180-1.jpg', 
                [new Ingredient('Taste maker', 10), new Ingredient('Noodle', 120)])
  ];
    
  constructor(private slService: ShoppingListService) { }

  getRecipe(index: number) {
    return this.recipes[index];
  }
  
  getRecipeMethod() {
    return this.recipes.slice();
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  
  addRecipe(recipe: Recipes) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipes) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
