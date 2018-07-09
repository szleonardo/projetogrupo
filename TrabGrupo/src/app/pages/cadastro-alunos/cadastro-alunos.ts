import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alunos } from '../../model/alunos';
@Component({
    selector:'cadastro-alunos',
    styleUrls:['cadastro-alunos.scss'],
    templateUrl:'cadastro-alunos.html'
})
export class CadastroAlunos implements OnInit {

    public formGroup:FormGroup;
    public alunos:Alunos = new Alunos();
    constructor(private formBuilder:FormBuilder){
         this.formGroup = this.formBuilder.group({
            codigo:[null ],
            nome:[null, Validators.required],
            rg:[''],
            cpf:[null, Validators.required],
            curso:[null, Validators.required],
            ano:[null, Validators.required],
            datmatricula:[null, Validators.required],
            datvalidade:[null, Validators.required]
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