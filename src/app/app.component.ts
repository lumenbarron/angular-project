import { Component } from '@angular/core';
import { MonkeyStyleGuideSettingsService } from 'monkey-style-guide';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title:string = 'Lucy';
  show:boolean = true;
  fondo:string = '';
  display:string = '';
  cursos:string[] = ['Gajaja', 'CSS', 'Angular'];
  animals:Array<any> = [
    {
      tipo: 'pérro', nombre : 'lu', edad: 10
    },
    {
      tipo: 'gato', nombre : 'assd', edad: 8
    },
    {
      tipo: 'perico', nombre : 'peri', edad: 1
    },
    {
      tipo: 'lro', nombre : 'lo', edad: 2
    }

  ]

  constructor(private settingsService: MonkeyStyleGuideSettingsService) {
    this.settingsService.boostrap('');
  }
}
