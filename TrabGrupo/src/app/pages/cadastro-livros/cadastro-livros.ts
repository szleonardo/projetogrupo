import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Livros } from '../../model/livros';
@Component({
    selector:'cadastro-livros',
    templateUrl:'cadastro-livros.html',
    styleUrls:['cadastro-livros.scss']
})
export class CadastroLivros implements OnInit {

    public formGroup:FormGroup;
    public livros:Livros = new Livros();
    constructor(private formBuilder:FormBuilder){
        this.formGroup = this.formBuilder.group({
            id:[null ],
            titulo:[null, Validators.required],
            editora:[null, Validators.required],
            edicao:[null, Validators.required],
            anoPublicacao:[null, Validators.required],
            autor:[null, Validators.required],
            assunto:[null, Validators.required]
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