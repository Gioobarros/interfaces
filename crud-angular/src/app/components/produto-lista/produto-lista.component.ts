import { Component } from '@angular/core';

@Component({
  selector: 'app-produto-lista',
  imports: [],
  templateUrl: './produto-lista.component.html',
  styleUrl: './produto-lista.component.scss'
})
export class ProdutoListaComponent {

}
export interface Produto {
  id: number;
  nome: string;
  preco: number;
  ativo: boolean;
}