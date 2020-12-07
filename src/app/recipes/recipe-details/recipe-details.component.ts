import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe: Recipes;

  constructor(private rService: RecipeService) { }

  ngOnInit(): void {
  }

  addToShoppingList(){
    this.rService.addToShoppingList(this.recipe.ingredients);
  }

}
