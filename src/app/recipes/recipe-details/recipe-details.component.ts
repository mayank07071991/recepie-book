import { Component, OnInit, Input,OnDestroy } from '@angular/core';
import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service'
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { RecipeService } from "../recipe.service";
@Component({
  selector: 'rb-recipe-details',
  templateUrl: './recipe-details.component.html',

})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  @Input() selectedRecipe: Recipe;
  private recipeIndex: number;
  private subscription: Subscription;

  constructor(
    private sls: ShoppingListService,
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService

  ) { }

  ngOnInit() {

    this.subscription = this.route.params.subscribe(

      (params: any) => {
        this.recipeIndex = params['id'],
          this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
      }
    )

  }

  onAddToShoppingList() {
    console.log(this.selectedRecipe);
    this.sls.addItems(this.selectedRecipe.ingredients)

  }

  onEdit() {

    this.router.navigate(['/recipe', this.recipeIndex, 'edit'])
  }

  onDelete() {
    this.router.navigate(['/recipe']);
    this.recipeService.deleteRecipe(this.selectedRecipe);

  }

ngOnDestroy() {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  this.subscription.unsubscribe();
}
}
