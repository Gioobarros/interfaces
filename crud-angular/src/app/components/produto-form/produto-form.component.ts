import { Component, OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { ActivatedRoute, Router } from "@angular/router"
import { Produto } from "../../models/produto"
import { ProdutoService } from "../../services/produto.service"
import { MessageService } from "primeng/api"

// PrimeNG Components
import { CardModule } from "primeng/card"
import { InputTextModule } from "primeng/inputtext"
import { InputNumberModule } from "primeng/inputnumber"
import { CheckboxModule } from "primeng/checkbox"
import { ButtonModule } from "primeng/button"
import { ToastModule } from "primeng/toast"
import { DividerModule } from "primeng/divider"

@Component({
  selector: "app-produto-form",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    InputTextModule,
    InputNumberModule,
    CheckboxModule,
    ButtonModule,
    ToastModule,
    DividerModule,
  ],
  templateUrl: "./produto-form.component.html",
  styleUrls: ["./produto-form.component.scss"],
})
export class ProdutoFormComponent implements OnInit {
  produto: Produto = {
    id: 0,
    nome: "",
    preco: 0,
    ativo: true,
  }

  isEdicao = false
  formTitle = "Novo Produto"

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")
    if (id) {
      this.isEdicao = true
      this.formTitle = "Editar Produto"
      this.carregarProduto(+id)
    }
  }

  carregarProduto(id: number): void {
    this.produtoService.getProduto(id).subscribe((produto) => {
      if (produto) {
        this.produto = { ...produto }
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

  salvar(): void {
    if (!this.validarFormulario()) {
      return
    }

    if (this.isEdicao) {
      this.produtoService.updateProduto(this.produto).subscribe(() => {
        this.messageService.add({
          severity: "success",
          summary: "Sucesso",
          detail: "Produto atualizado com sucesso!",
        })
        this.voltar()
      })
    } else {
      this.produtoService.addProduto(this.produto).subscribe(() => {
        this.messageService.add({
          severity: "success",
          summary: "Sucesso",
          detail: "Produto adicionado com sucesso!",
        })
        this.voltar()
      })
    }
  }

  validarFormulario(): boolean {
    if (!this.produto.nome.trim()) {
      this.messageService.add({
        severity: "error",
        summary: "Erro",
        detail: "Nome do produto é obrigatório!",
      })
      return false
    }

    if (this.produto.preco <= 0) {
      this.messageService.add({
        severity: "error",
        summary: "Erro",
        detail: "Preço deve ser maior que zero!",
      })
      return false
    }

    return true
  }

  voltar(): void {
    this.router.navigate(["/produtos"])
  }
}

