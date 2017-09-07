//import { provideRoutes } from "@angular/router";
import { Routes, RouterModule } from '@angular/router'
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RECIPE_ROUTE } from "./recipes/recipe.route";

// export const APP_ROUTES_PROVIDERS= [
//     provideRoutes([
//         { path: '', redirectTo: '/recipe', pathMatch: 'full' },
//         { path: 'recipes', component: RecipesComponent },
//         { path: 'shopping-list', component: ShoppingListComponent }
//     ])

// ];

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/recipe', pathMatch: 'full' },
    { path: 'recipe', component: RecipesComponent, children: RECIPE_ROUTE },
    { path: 'shopping-list', component: ShoppingListComponent }

];

export const APP_ROUTES_PROVIDERS = RouterModule.forRoot(APP_ROUTES);