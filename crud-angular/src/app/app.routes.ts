import type { Routes } from "@angular/router"
import { ProdutoCrudComponent } from "./components/produto-crud/produto-crud.component"

export const routes: Routes = [
  { path: "", redirectTo: "produtos", pathMatch: "full" },
  { path: "produtos", component: ProdutoCrudComponent },
  { path: "**", redirectTo: "produtos" },
]

