import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs"

export interface Produto {
  id: number
  nome: string
  preco: number
  ativo: boolean
}

@Injectable({
  providedIn: "root",
})
export class ProdutoService {
  private produtos: Produto[] = [
    { id: 1, nome: "Produto 1", preco: 10, ativo: true },
    { id: 2, nome: "Produto 2", preco: 20, ativo: false },
    { id: 3, nome: "Produto 3", preco: 30, ativo: true },
  ]

  getProdutos(): Observable<Produto[]> {
    return of(this.produtos)
  }

  getProduto(id: number): Observable<Produto | undefined> {
    return of(this.produtos.find((p) => p.id === id))
  }

  addProduto(produto: Produto): Observable<Produto> {
    produto.id = Math.max(...this.produtos.map((p) => p.id), 0) + 1
    this.produtos.push(produto)
    return of(produto)
  }

  updateProduto(produto: Produto): Observable<Produto> {
    const index = this.produtos.findIndex((p) => p.id === produto.id)
    if (index !== -1) {
      this.produtos[index] = produto
    }
    return of(produto)
  }

  deleteProduto(id: number): Observable<void> {
    this.produtos = this.produtos.filter((p) => p.id !== id)
    return of(undefined)
  }
}

