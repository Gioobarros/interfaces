import { Component, OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { ProdutoService, Produto } from "../../services/produto.service"

@Component({
  selector: "app-produto-crud",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./produto-crud.component.html",
  styleUrls: ["./produto-crud.component.scss"],
})
export class ProdutoCrudComponent implements OnInit {
  produtos: Produto[] = []
  produtoSelecionado: Produto | null = null
  novoOuEditando = false

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos()
  }

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe((produtos) => {
      this.produtos = produtos
    })
  }

  selecionarProduto(produto: Produto): void {
    this.produtoSelecionado = { ...produto }
    this.novoOuEditando = true
  }

  novoProduto(): void {
    this.produtoSelecionado = { id: 0, nome: "", preco: 0, ativo: true }
    this.novoOuEditando = true
  }

  salvarProduto(): void {
    if (this.produtoSelecionado) {
      if (this.produtoSelecionado.id === 0) {
        this.produtoService.addProduto(this.produtoSelecionado).subscribe(() => {
          this.carregarProdutos()
          this.cancelar()
        })
      } else {
        this.produtoService.updateProduto(this.produtoSelecionado).subscribe(() => {
          this.carregarProdutos()
          this.cancelar()
        })
      }
    }
  }

  deletarProduto(id: number): void {
    this.produtoService.deleteProduto(id).subscribe(() => {
      this.carregarProdutos()
    })
  }

  cancelar(): void {
    this.produtoSelecionado = null
    this.novoOuEditando = false
  }
}

