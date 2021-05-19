import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilmesService } from './shared/model/services/filmes.service';
import { FilmesFormComponent } from './filmes-form/filmes-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmesFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    
  ],
  providers: [FilmesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
