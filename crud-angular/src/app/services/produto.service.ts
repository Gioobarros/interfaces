import { Injectable } from "@angular/core"
import type { Produto } from "../models/produto"
import { type Observable, of } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class ProdutoService {
  private produtos: Produto[] = [
    { id: 1, nome: "Produto 1", preco: 10, ativo: true },
    { id: 2, nome: "Produto 2", preco: 20, ativo: false },
    { id: 3, nome: "Produto 3", preco: 30, ativo: true },
    { id: 4, nome: "Produto 4", preco: 40, ativo: true },
    { id: 5, nome: "Produto 5", preco: 50, ativo: true },
  ]

  getProdutos(): Observable<Produto[]> {
    return of(this.produtos)
  }

  getProduto(id: number): Observable<Produto | undefined> {
    const produto = this.produtos.find((p) => p.id === id)
    return of(produto)
  }

  addProduto(produto: Produto): Observable<Produto> {
    const maxId = this.produtos.reduce((max, p) => (p.id > max ? p.id : max), 0)
    produto.id = maxId + 1
    this.produtos.push({ ...produto })
    return of(produto)
  }

  updateProduto(produto: Produto): Observable<Produto> {
    const index = this.produtos.findIndex((p) => p.id === produto.id)
    if (index > -1) {
      this.produtos[index] = { ...produto }
    }
    return of(produto)
  }

  deleteProduto(id: number): Observable<number> {
    this.produtos = this.produtos.filter((p) => p.id !== id)
    return of(id)
  }
}

