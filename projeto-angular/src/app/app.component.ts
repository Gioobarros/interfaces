import { Component } from '@angular/core';
import { Produto } from './produto.model';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
})

export class AppComponent {
  produtos: Produto[] = [];
  produto: Produto = { id: undefined, nome: '', preco: undefined, disponivel: false };
  novoProduto: Produto = { id: undefined, nome: '', preco: undefined, disponivel: false };
  produtoSelecionado: Produto | null = null;
  title = 'projeto-angular';

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.produtoService.getProdutos().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }

  adicionarProduto() {
    this.produtoService.addProduto(this.novoProduto).subscribe(() => {
      this.carregarProdutos();
      this.novoProduto = { id: undefined, nome: '', preco: undefined, disponivel: false };
    });
  }

  editarProduto(id: number | undefined) {
    if (id !== undefined) {
      console.log('Editar produto com ID:', id);
      // Aqui você pode adicionar a lógica para editar o produto, como abrir um formulário de edição.
    } else {
      console.error('ID do produto é indefinido. Não é possível editar.');
    }
  }

  removerProduto(id: number) {
    this.produtoService.deleteProduto(id).subscribe(() => {
      this.carregarProdutos();
    });
  }

  mostrarDetalhes(produto: Produto) {
    this.produtoSelecionado = produto;
  }

  fecharDetalhes() {
    this.produtoSelecionado = null;
  }
}