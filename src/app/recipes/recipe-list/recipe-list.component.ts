import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    
  // Recipe model
  recipes: Recipes[];

  constructor(private recipeService: RecipeService, private router:Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipeMethod();
  }

  createRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
