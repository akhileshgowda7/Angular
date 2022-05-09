import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] =[
    new Recipe('A Test recipe','Just a test image','https://picsum.photos/200'),new Recipe('A Test recipe','Just a test image','https://picsum.photos/200')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
