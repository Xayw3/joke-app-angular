import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Joke } from 'src/app/models/joke.model';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent {
  @Input()
  joke?: Joke;

  @Output()
  deleteJokeEvent = new EventEmitter<null>()

  deleteJoke(): void {
    this.deleteJokeEvent.emit();
  }

  showAnswer = false;

  toggleAnswer(): void {
    this.showAnswer = !this.showAnswer
  }
}
