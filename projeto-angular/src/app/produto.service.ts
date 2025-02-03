import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private produtos: Produto[] = [
    { id: 1, nome: 'Produto 1', preco: 10, disponivel: true },
    { id: 2, nome: 'Produto 2', preco: 20, disponivel: false },
  ];

  getProdutos(): Observable<Produto[]> {
    return of(this.produtos);
  }

  addProduto(produto: Produto): Observable<Produto> {
    const newId = this.produtos.length > 0 ? Math.max(...this.produtos.map(p => p.id || 0)) + 1 : 1;
    const novoProduto = { ...produto, id: newId };
    this.produtos.push(novoProduto);
    return of(novoProduto);
  }

  deleteProduto(id: number): Observable<void> {
    this.produtos = this.produtos.filter(p => p.id !== id);
    return of(undefined);
  }
}