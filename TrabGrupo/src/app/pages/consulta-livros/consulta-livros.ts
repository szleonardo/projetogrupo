import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector:'consulta-livros',
    styleUrls:['consulta-livros.scss'],
    templateUrl:'consulta-livros.html'
})
export class ConsultaLivros implements OnInit {
    public formGroup:FormGroup;
    public senhaAtual:string;

    public confirmeSenha:string;

    constructor(private fb:FormBuilder){}

    ngOnInit(){
        const senhaAtual = new FormControl('', Validators.required);
        const novaSenha = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(50)]));
        const confirmeSenha = new FormControl('', Validators.required);
        
        this.formGroup = this.fb.group({
            usuario: ['', Validators.compose([Validators.required])],
            senhaAtual: senhaAtual,
            novasenha: novaSenha,
            confirmeSenha: confirmeSenha
        });

    }






}