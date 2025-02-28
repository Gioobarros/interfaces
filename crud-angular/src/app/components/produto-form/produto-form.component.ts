import { Component,  OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ReactiveFormsModule, FormBuilder,  FormGroup, Validators } from "@angular/forms"
import { ActivatedRoute, Router } from "@angular/router"
import { ProdutoService, Produto } from "../../services/produto.service"

@Component({
  selector: "app-produto-form",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>{{ isEditing ? 'Editar' : 'Novo' }} Produto</h2>
    <form [formGroup]="produtoForm" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" id="nome" formControlName="nome">
      </div>
      <div class="form-group">
        <label for="preco">Preço</label>
        <input type="number" class="form-control" id="preco" formControlName="preco">
      </div>
      <div class="form-check mb-3">
        <input type="checkbox" class="form-check-input" id="ativo" formControlName="ativo">
        <label class="form-check-label" for="ativo">Ativo</label>
      </div>
      <button type="submit" class="btn btn-primary" [disabled]="produtoForm.invalid">Salvar</button>
      <button type="button" class="btn btn-secondary ml-2" (click)="cancelar()">Cancelar</button>
    </form>
  `,
})
export class ProdutoFormComponent implements OnInit {
  produtoForm: FormGroup
  isEditing = false

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.produtoForm = this.fb.group({
      id: [null],
      nome: ["", Validators.required],
      preco: [0, [Validators.required, Validators.min(0)]],
      ativo: [true],
    })
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")
    if (id) {
      this.isEditing = true
      this.produtoService.getProduto(+id).subscribe((produto) => {
        if (produto) {
          this.produtoForm.patchValue(produto)
        } else {
          this.router.navigate(["/produtos"])
        }
      })
    }
  }

  onSubmit(): void {
    if (this.produtoForm.valid) {
      const produto: Produto = this.produtoForm.value
      if (this.isEditing) {
        this.produtoService.updateProduto(produto).subscribe(() => {
          this.router.navigate(["/produtos"])
        })
      } else {
        this.produtoService.addProduto(produto).subscribe(() => {
          this.router.navigate(["/produtos"])
        })
      }
    }
  }

  cancelar(): void {
    this.router.navigate(["/produtos"])
  }
}

