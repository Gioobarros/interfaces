import { Component, OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ActivatedRoute, Router, RouterModule } from "@angular/router"
import { ProdutoService, Produto } from "../../services/produto.service"

@Component({
  selector: "app-produto-detalhe",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div *ngIf="produto">
      <h2>Detalhes do Produto</h2>
      <dl>
        <dt>ID:</dt>
        <dd>{{ produto.id }}</dd>
        <dt>Nome:</dt>
        <dd>{{ produto.nome }}</dd>
        <dt>Preço:</dt>
        <dd>{{ produto.preco | currency:'BRL' }}</dd>
        <dt>Ativo:</dt>
        <dd>{{ produto.ativo ? 'Sim' : 'Não' }}</dd>
      </dl>
      <a [routerLink]="['/produtos/editar', produto.id]" class="btn btn-primary">Editar</a>
      <button (click)="voltar()" class="btn btn-secondary ml-2">Voltar</button>
    </div>
  `,
})
export class ProdutoDetalheComponent implements OnInit {
  produto: Produto | undefined

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")
    if (id) {
      this.produtoService.getProduto(+id).subscribe((produto) => {
        this.produto = produto
      })
    }
  }

  voltar(): void {
    this.router.navigate(["/produtos"])
  }
}

