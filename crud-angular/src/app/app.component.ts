import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterOutlet } from "@angular/router"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="container">
      <h1>CRUD de Produtos</h1>
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
  `,
  ],
})
export class AppComponent {
  title = "crud-angular"
}

