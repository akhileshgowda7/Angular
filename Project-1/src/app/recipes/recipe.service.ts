import {  Injectable } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{

    private recipes:Recipe[] =[
        new Recipe('Tasty recipe','Just a test image','https://i.pinimg.com/564x/34/11/91/341191c8a908e5533c3257bc973b71c0.jpg',[
            new Ingredient('Meat',1), new Ingredient('Fries',5)
        ]),
        new Recipe('Burger','Just a test image','https://i.pinimg.com/564x/83/fe/4f/83fe4fb43c158ba1af17ba351c06fe22.jpg',[
            new Ingredient('Buns',2), new Ingredient('Patties',1)
        ])
    
      ];
      constructor(private slService:ShoppingListService){

      }
      getRecipes(){
          return this.recipes.slice(); //returs a new array as a copy
      }

    getRecipe(index:number){
        return this.recipes[index];
    }


      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}