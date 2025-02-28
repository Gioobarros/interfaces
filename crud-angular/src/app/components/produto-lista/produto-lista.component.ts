import { Component, OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { Router } from "@angular/router"
import { Produto } from "../../models/produto"
import { ProdutoService } from "../../services/produto.service"
import { ConfirmationService, MessageService } from "primeng/api"

// PrimeNG Components
import { TableModule } from "primeng/table"
import { ButtonModule } from "primeng/button"
import { ToastModule } from "primeng/toast"
import { ConfirmDialogModule } from "primeng/confirmdialog"
import { TagModule } from "primeng/tag"
import { ToolbarModule } from "primeng/toolbar"
import { InputTextModule } from "primeng/inputtext"

@Component({
  selector: "app-produto-lista",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
    TagModule,
    ToolbarModule,
    InputTextModule,
  ],
  templateUrl: "./produto-lista.component.html",
  styleUrls: ["./produto-lista.component.scss"],
})
export class ProdutoListaComponent implements OnInit {
  produtos: Produto[] = []
  globalFilterValue = ""

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.carregarProdutos()
  }

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe((produtos) => {
      this.produtos = produtos
    })
  }

  adicionarProduto(): void {
    this.router.navigate(["/produtos/novo"])
  }

  editarProduto(produto: Produto): void {
    this.router.navigate(["/produtos/editar", produto.id])
  }

  detalharProduto(produto: Produto): void {
    this.router.navigate(["/produtos/detalhe", produto.id])
  }

  confirmarRemocao(produto: Produto): void {
    this.confirmationService.confirm({
      message: `Tem certeza que deseja remover o produto "${produto.nome}"?`,
      header: "Confirmar Remoção",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Sim",
      rejectLabel: "Não",
      accept: () => {
        this.removerProduto(produto.id)
      },
    })
  }

  removerProduto(id: number): void {
    this.produtoService.deleteProduto(id).subscribe(() => {
      this.carregarProdutos()
      this.messageService.add({
        severity: "success",
        summary: "Sucesso",
        detail: "Produto removido.",
      })
    })
  }

  getSeverity(ativo: boolean): string {
    return ativo ? "success" : "danger"
  }
}

