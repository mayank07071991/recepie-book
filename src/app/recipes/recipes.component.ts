import { Component } from '@angular/core';
import{ Recipe} from './recipe';
import{RecipeService} from './recipe.service';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent  {

}
