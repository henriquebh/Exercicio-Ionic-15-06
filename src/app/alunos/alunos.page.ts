import { Component, OnInit } from '@angular/core';
import * as alunos from '../../assets/alunos.json'

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
})
export class AlunosPage implements OnInit {

  constructor() { }

  ngOnInit() {
    let varir=alunos;
    console.log(Object.values(alunos)[3])
   
  }

}
