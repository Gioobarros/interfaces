import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Produto } from './models/produto';
import { ProdutoService } from './services/produto.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  produtos: Produto[] = [];
  produtoSelecionado: Produto | null = null;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.produtoService.getProdutos().subscribe(produtos => {
      this.produtos = produtos;
    });
  }

  selecionarProduto(produto: Produto) {
    this.produtoSelecionado = produto;
  }

  inserirProduto(produto: Produto) {
    this.produtoService.addProduto(produto).subscribe(() => {
      this.carregarProdutos();
    });
  }

  atualizarProduto(produto: Produto) {
    this.produtoService.updateProduto(produto).subscribe(() => {
      this.carregarProdutos();
      this.produtoSelecionado = null; // Limpa o produto selecionado
      // Adicione um feedback visual aqui (ex: mensagem de sucesso)
    });
  }

  removerProduto(id: number) {
    this.produtoService.deleteProduto(id).subscribe(() => {
      this.carregarProdutos();
    });
  }
}