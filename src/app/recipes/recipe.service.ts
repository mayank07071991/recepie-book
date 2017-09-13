
import { Recipe } from './recipe'
import { Ingredient } from '../shared/ingredient';
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schitzel', 'Very tasty', 'https://www.bbcgoodfood.com/sites/default/files/recipe_images/recipe-image-legacy-id--46004_11.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad', 'yummy', 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/3/17/1/BX0218_arugula-watermelon-and-feta-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539154231.jpeg', [])
  ]
  constructor() { }
  onGetRecipe() {
    return this.recipes;

  }

  getRecipe(id: number) {
         return this.recipes[id];
  }

   deleteRecipe(recipe: Recipe){
     this.recipes.splice(this.recipes.indexOf(recipe),1)
   }
   addRecipe(recipe:Recipe){
     this.recipes.push(recipe)
   }
   editRecipe(oldRecipe:Recipe,newRecipe:Recipe){
     this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
   }
}
