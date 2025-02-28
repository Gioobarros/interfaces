import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterOutlet, RouterModule } from "@angular/router"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  template: `
    <div class="container">
      <h1>CRUD de Produtos</h1>
      <nav>
        <a routerLink="/produtos" class="btn btn-link">Lista de Produtos</a>
        <a routerLink="/produtos/novo" class="btn btn-link">Novo Produto</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    nav {
      margin-bottom: 20px;
    }
  `,
  ],
})
export class AppComponent {
  title = "crud-angular"
}

