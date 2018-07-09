import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule,MatSliderModule,
  MatButtonToggle,
  MatNativeDateModule,
  MatListModule,
  MatSidenavModule,
  MatCardModule
} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';

import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { Menu } from './componentes/menu/menu';
import { AppRoute } from './app-router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CadastroLivros } from './pages/cadastro-livros/cadastro-livros';
import { CadastroAlunos } from './pages/cadastro-alunos/cadastro-alunos';
import { LocacaoLivros } from './pages/locacao-livros/locacao-livros';
import { ConsultaLivros } from './pages/consulta-livros/consulta-livros';

@NgModule({
  declarations: [
    AppComponent,
    CadastroAlunos,
    LocacaoLivros,
    Menu,
    CadastroLivros,
    ConsultaLivros
  ],
  imports: [
    MatExpansionModule,
    MatListModule,
    MatSidenavModule,
    AppRoute,FlexLayoutModule,
    MatCardModule,ReactiveFormsModule,
    BrowserModule,BrowserAnimationsModule,
    MatDatepickerModule,   MatNativeDateModule ,
    MatButtonModule, MatCheckboxModule, MatSelectModule,
    MatAutocompleteModule, MatInputModule, MatFormFieldModule,
    FormsModule,MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
