import { Component } from '@angular/core';
import * as alunos from '../assets/alunos.json'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/', icon: 'home' },
    { title: 'Alunos', url: '/alunos', icon: 'people' },
  ];

  constructor() {}
}
