import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos: Produto[] = [];

  getProdutos(): Produto[] {
    return this.produtos;
  }

  adicionarProduto(produto: Produto) {
    produto.id = this.produtos.length + 1;
    this.produtos.push(produto);
  }

  atualizarProduto(produto: Produto) {
    const index = this.produtos.findIndex(p => p.id === produto.id);
    if (index > -1) this.produtos[index] = produto;
  }

  removerProduto(id: number) {
    this.produtos = this.produtos.filter(p => p.id !== id);
  }
}
