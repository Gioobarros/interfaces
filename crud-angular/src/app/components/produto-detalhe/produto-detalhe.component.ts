import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import type { ActivatedRoute, Router } from "@angular/router"
import type { Produto } from "../../models/produto"
import type { ProdutoService } from "../../services/produto.service"
import type { MessageService } from "primeng/api"

// PrimeNG Components
import { CardModule } from "primeng/card"
import { ButtonModule } from "primeng/button"
import { ToastModule } from "primeng/toast"
import { DividerModule } from "primeng/divider"
import { TagModule } from "primeng/tag"

@Component({
  selector: "app-produto-detalhe",
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, ToastModule, DividerModule, TagModule],
  templateUrl: "./produto-detalhe.component.html",
  styleUrls: ["./produto-detalhe.component.scss"],
})
export class ProdutoDetalheComponent implements OnInit {
  produto?: Produto

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")
    if (id) {
      this.carregarProduto(+id)
    } else {
      this.voltar()
    }
  }

  carregarProduto(id: number): void {
    this.produtoService.getProduto(id).subscribe((produto) => {
      if (produto) {
        this.produto = produto
      } else {
        this.messageService.add({
          severity: "error",
          summary: "Erro",
          detail: "Produto não encontrado!",
        })
        this.voltar()
      }
    })
  }

  editarProduto(): void {
    if (this.produto) {
      this.router.navigate(["/produtos/editar", this.produto.id])
    }
  }

  voltar(): void {
    this.router.navigate(["/produtos"])
  }

  getSeverity(ativo: boolean): string {
    return ativo ? "success" : "danger"
  }
}

