import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvellous InfoSystems!';
  public Demo = "Marvellous";

   public fun()
  {
    this.Demo = "Educating for better tomorrow";

}
