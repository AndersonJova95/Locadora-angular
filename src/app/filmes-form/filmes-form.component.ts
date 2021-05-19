import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filmes-form',
  templateUrl: './filmes-form.component.html',
  styleUrls: ['./filmes-form.component.css']
})
export class FilmesFormComponent implements OnInit {

  form!: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
      nome: [null, [Validators, Validators, Validators.minLength(5), Validators.maxLength(250)]]
    })
  }

}
