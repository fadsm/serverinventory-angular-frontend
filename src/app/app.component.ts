import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<a href="/server">Server</a>
<router-outlet></router-outlet>`
})
export class AppComponent {
}
