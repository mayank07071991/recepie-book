import { Routes } from "@angular/router";
import { RecipeStartComponent } from "./recipe-start.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";

export const RECIPE_ROUTE: Routes = [

    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeStartComponent },
    { path: ':id', component: RecipeDetailsComponent },
    { path: ':id/edit', component: RecipeEditComponent }

]