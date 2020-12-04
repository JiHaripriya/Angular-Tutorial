import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() newIngredients = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  addToList() {
    this.newIngredients.emit(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
  }

}
