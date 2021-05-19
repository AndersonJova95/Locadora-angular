import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../shared/model/services/filmes.service';
import { Filme } from '../shared/model/services/filme.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FilmesService]
})
export class HomeComponent implements OnInit {

  public filmes: Filme[]

  constructor(private filmesService: FilmesService,) {

    this.filmes = [];
  }


  ngOnInit() {
    this.filmesService.getFilmes()
      .subscribe(dados => this.filmes = dados);

  }



}



