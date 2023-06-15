import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {

  url: string ='http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/nature';
  valorAtual : String = '';
  valorSalvo = '';
  isMouseOver : boolean = false;
  nome: string = 'abc';

  getValor(){
    return 1;
  };

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert("Botão clicado!");
  }

  onKeyUp(evento: KeyboardEvent){
    console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
