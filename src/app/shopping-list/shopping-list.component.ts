import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[] = [
    new Ingredient('Butter', 150),
    new Ingredient('Jam', 250),
    new Ingredient('Maggie Packet', 100)
  ];

  newItem:Ingredient;

  constructor() { }

  ngOnInit(): void {
  }

  addShoppingItem(shoppingItem: Ingredient){
    this.ingredients.push(shoppingItem);
  }

}
