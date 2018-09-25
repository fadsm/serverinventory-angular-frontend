import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpServerComponent } from './httpserver.component';
import { HttpClusterComponent} from './httpcluster.component';
import { HttpVcenterComponent} from './httpvcenter.component';



@NgModule({
  declarations: [
    AppComponent,
    HttpServerComponent,
    HttpClusterComponent,
    HttpVcenterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
  {
    path: 'server',
    component: HttpServerComponent
  },
  {
    path: 'cluster',
    component: HttpClusterComponent
  },
  {
    path: 'vcenter',
    component: HttpVcenterComponent
  },
  ])
  ],
  providers: [HttpServerComponent, HttpClusterComponent, HttpVcenterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
