import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterOutlet } from "@angular/router"
import { ProdutoListaComponent } from "./components/produto-lista/produto-lista.component"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProdutoListaComponent],
  template: `
    <div class="container">
      <h1 class="my-4 text-center">Sistema de Gerenciamento de Produtos</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
    :host {
      display: block;
      font-family: var(--font-family);
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem;
    }
  `,
  ],
})
export class AppComponent {
  title = "crud-angular"
}

