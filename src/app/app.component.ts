import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome: string;
  exibeCaixa: boolean = false;

  alterarNome (nome): void{
    console.log(nome.target.value);
    this.nome = nome.target.value;
  }
  adicionar(nomeInput): void {
    console.log (nomeInput.value);
    this.nome = nomeInput.value;
    this.exibeCaixa = true;
    //console.log ("Adicioando...")
  }

    /*nome: string = "José"
  idade: number = 20

  lancarDado (): number{
    return Math.floor(Math.random() * 6 )+ 1;
  }*/
}
