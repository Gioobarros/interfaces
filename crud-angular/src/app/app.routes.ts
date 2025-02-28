import { Routes } from "@angular/router"
import { ProdutoListaComponent } from "./components/produto-lista/produto-lista.component"
import { ProdutoFormComponent } from "./components/produto-form/produto-form.component"
import { ProdutoDetalheComponent } from "./components/produto-detalhe/produto-detalhe.component"

export const routes: Routes = [
  { path: "", redirectTo: "produtos", pathMatch: "full" },
  { path: "produtos", component: ProdutoListaComponent },
  { path: "produtos/novo", component: ProdutoFormComponent },
  { path: "produtos/editar/:id", component: ProdutoFormComponent },
  { path: "produtos/:id", component: ProdutoDetalheComponent },
  { path: "**", redirectTo: "produtos" },
]

