import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project';
  date = new Date();

  constructor(){
    console.log("Shahina");
    this.doSomething('shahi')
  }
  doSomething(val: string): void{
    val = "Awesome";
  }
}
