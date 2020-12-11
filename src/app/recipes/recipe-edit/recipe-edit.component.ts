import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute, private rService: RecipeService, private router: Router) { }

  recipeForm: FormGroup;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null; 
        this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let rImagePath = '';
    let rDescription = '';
    let rIngredients = new FormArray([]);

    if(this.editMode) {
      const recipe = this.rService.getRecipe(this.id);
      recipeName = recipe.name;
      rImagePath = recipe.imagePath;
      rDescription = recipe.description;
      if(recipe['ingredients']){
        for(let ing of recipe.ingredients) {
          rIngredients.push(new FormGroup({
              'name': new FormControl(ing.name, Validators.required),
              'amount': new FormControl(ing.amount, [
                Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(rImagePath, Validators.required),
      'description': new FormControl(rDescription, Validators.required),
      'ingredients': rIngredients
    })
  }

  onSubmit(){
    console.log(this.recipeForm);
    // const newRecipe = new Recipes(this.recipeForm.value['name'],
    // this.recipeForm.value['description'],
    // this.recipeForm.value['imagePath'],
    // this.recipeForm.value['ingredients']);
    
    if(this.editMode){
      this.rService.updateRecipe(this.id, this.recipeForm.value);
    }else{
      this.rService.addRecipe(this.recipeForm.value);
    }
    this.cancel();
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  cancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDelete(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
