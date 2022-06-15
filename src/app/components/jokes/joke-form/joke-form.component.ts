import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss']
})
export class JokeFormComponent implements OnInit {
  jokeForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {};

  ngOnInit(): void {
    this.buildForm()
  };

  buildForm(): void {
    this.jokeForm = this.fb.group({
      question: "",
      answer: ""
    })
  };

  addJoke(): void {
    console.log(this.jokeForm.value.answer);
  };
}
