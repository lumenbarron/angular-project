import { Component } from '@angular/core';

@Component({
    selector : 'my-component',
    // template : `<h1>{{ title}} </h1> 
    // <h1>{{ number}} </h1> `
    templateUrl : "./my-component.component.html"
})

export class MyComponent {
    public title : string;
    public commment : string;
    public year : number;
    constructor(){
        this. title = "un ttitulo";
        this.commment = "un comentario";
        this.year = 123
        console.log('componente cargado', this.title, this.commment, this.year)
    }
}
