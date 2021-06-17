import { Injectable } from '@angular/core';
import * as alunos from '../../assets/alunos.json' ;
import { aluno} from '../models/aluno.model' ;
@Injectable({
  providedIn: 'root'
})
export class AlunosServiceService {
alunoss: aluno[ ];
  constructor() { }
  async getAlunos(){
    let alunoss=alunos;
    return alunoss;
  }
}
