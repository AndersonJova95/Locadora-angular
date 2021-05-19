import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Filme } from './filme.model';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private httpClient: HttpClient) { }

  private readonly API = 'http://localhost:3000/filmes'


  getFilmes() {
    return this.httpClient.get<Filme[]>(this.API)
      .pipe(
        tap(console.log)
      )

  }

}
