import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  // Recipe model
  recipes: Recipes[] = [
    new Recipes('Bread', 'Made from wheat', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Fresh_made_bread_05.jpg/1024px-Fresh_made_bread_05.jpg'),
    new Recipes('Maggie', 'Delicious noodles', 'https://images.mygoodtimes.in/wp-content/uploads/2018/08/31063759/iStock-643845180-1.jpg')
  ];
  
  constructor() {
  }

  ngOnInit(): void {
  }


}
