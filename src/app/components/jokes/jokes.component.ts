import { Component } from '@angular/core';
import { Joke } from 'src/app/models/joke.model';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent {
  jokes: Joke[] = [
    {
      question: "What did the ocean say to the beach?",
      answer: "Nothing, it just waved."
    },
    {
      question: "What do you call a fake noodle?",
      answer: "An impasta."
    },
    {
      question: "Why don’t eggs tell jokes?",
      answer: "They’d crack each other up."
    }
  ];

  addJoke(joke: Joke): void {
    this.jokes.push(joke);
  };

  deleteJoke(index: number): void {
    this.jokes.splice(index, 1);
  }
}
