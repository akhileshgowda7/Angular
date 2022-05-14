import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients:Ingredient[] = [new Ingredient('Apples',5),new Ingredient('tea',1)];

    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    getIngredient(index:number){
       return this.ingredients[index]; 
    }
    addIngredients(ingredients:Ingredient[]){
        // for(let ingredient of Ingredient[]){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    updateIngredient(index:number, newIngridient:Ingredient){
        this.ingredients[index] = newIngridient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index:number){
       this.ingredients.splice(index,1);
       this.ingredientsChanged.next(this.ingredients.slice());
    }

}