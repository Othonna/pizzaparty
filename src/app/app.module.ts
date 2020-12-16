import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PizzaAddComponent } from './pizza-add/pizza-add.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    MenuComponent,
    HomeComponent,
    PizzaAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule, 
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'Pizza', component: PizzaListComponent },
      { path: 'Pizza/add', component: PizzaAddComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
