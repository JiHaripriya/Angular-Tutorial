import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from '../recipe.service';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
    
  // Recipe model
  recipes: Recipes[];
  subs: Subscription;

  constructor(private recipeService: RecipeService, private router:Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipeMethod();

    this.subs = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipes[]) => {
        this.recipes = recipes;
      }
    )
  }

  createRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
