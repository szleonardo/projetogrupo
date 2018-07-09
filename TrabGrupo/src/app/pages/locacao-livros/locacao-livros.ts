import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Locacao } from "../../model/locacao";
@Component({
    selector:'locacao-livros',
    templateUrl:'locacao-livros.html',
    styleUrls:['locacao-livros.scss']
})
export class LocacaoLivros implements OnInit {

    public formGroup:FormGroup;
    public locacao:Locacao = new Locacao();
    constructor(private formBuilder:FormBuilder){
        this.formGroup = this.formBuilder.group({
            id:[null ],
            idLivro:[null, Validators.required],
            nomeAluno:[null, Validators.required],
            datLocacao:[null, Validators.required],
            datDevolucao:[null, Validators.required],
            valor:[null, Validators.required]
        });
    }
    ngOnInit(){
        
        console.log(this.formGroup);
    }
    public salvar(){
        if (this.formGroup.invalid){
            return;
        }
        alert('Salvo com sucesso!');
    }



}