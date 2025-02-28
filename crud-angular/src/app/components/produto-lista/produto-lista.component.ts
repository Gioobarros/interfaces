import { Component, OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"
import { ProdutoService, Produto } from "../../services/produto.service"

@Component({
  selector: "app-produto-lista",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Lista de Produtos</h2>
    <a [routerLink]="['/produtos/novo']" class="btn btn-primary mb-3">Novo Produto</a>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Ativo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let produto of produtos">
          <td>{{ produto.id }}</td>
          <td>{{ produto.nome }}</td>
          <td>{{ produto.preco | currency:'BRL' }}</td>
          <td>{{ produto.ativo ? 'Sim' : 'Não' }}</td>
          <td>
            <a [routerLink]="['/produtos', produto.id]" class="btn btn-sm btn-info mr-2">Detalhes</a>
            <a [routerLink]="['/produtos/editar', produto.id]" class="btn btn-sm btn-warning mr-2">Editar</a>
            <button (click)="deletarProduto(produto.id)" class="btn btn-sm btn-danger">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
})
export class ProdutoListaComponent implements OnInit {
  produtos: Produto[] = []

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos()
  }

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe((produtos) => {
      this.produtos = produtos
    })
  }

  deletarProduto(id: number): void {
    if (confirm("Tem certeza que deseja excluir este produto?")) {
      this.produtoService.deleteProduto(id).subscribe(() => {
        this.carregarProdutos()
      })
    }
  }
}

