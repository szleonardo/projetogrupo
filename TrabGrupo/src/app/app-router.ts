import { Router, Routes, RouterModule, NavigationStart, NavigationError } from '@angular/router';
import { NgModule } from '@angular/core';
import { CadastroLivros } from './pages/cadastro-livros/cadastro-livros';
import { CadastroAlunos } from './pages/cadastro-alunos/cadastro-alunos';
import { LocacaoLivros } from './pages/locacao-livros/locacao-livros';
import { ConsultaLivros } from './pages/consulta-livros/consulta-livros';

export const appRoutes: Routes = [

    {
        path: 'consulta-livros',
        component: ConsultaLivros
    },{
        path: 'cadastrar-alunos',
        component: CadastroAlunos
    },{
        path:'locacao-livros',
        component:LocacaoLivros
    },{
        path:'cadastrar-livros',
        component: CadastroLivros
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoute {
    
    constructor(router: Router) {
    }
}