import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Joke } from 'src/app/models/joke.model';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss']
})
export class JokeFormComponent implements OnInit {
  @Output() 
  addJokeEvent = new EventEmitter<Joke>()

  jokeForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {};

  ngOnInit(): void {
    this.buildForm()
  };

  buildForm(): void {
    this.jokeForm = this.fb.group({
      question: ["", [Validators.required]],
      answer: ["", [Validators.required]]
    });
  };

  disabledButton() {
    if (this.jokeForm.valid) {
      return false;
    } return true
  };

  addJoke(): void {
    if (this.jokeForm.valid) {
      this.addJokeEvent.emit(this.jokeForm.value);
      this.jokeForm.reset();
    };
  };
}
