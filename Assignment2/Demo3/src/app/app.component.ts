import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: (`<div style="text-align:center">
  <body>
  <h1>
    Marvellous InfoSystems!
  </h1>
  <h2>
    Educating for better tomorrow!
  </h2>
</body>
</div>`),
  styles: ['h1 { color: red;  } h2{ color: orange; text-decoration: blue double underline} body{background-color: skyblue}']
})
export class AppComponent {
  title = 'app';
}
