import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class="app">
              <h1 (click)="handleClick($event)" #heading>{{ newMessage }}</h1>
              <input [value]="message" (input)="newMessage = messageInput.value" #messageInput>
              <p>{{ heading.innerText}}</p>
            </div> `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 22px;
        color: #fff;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  message!: string;
  newMessage!: string;

  constructor() {}
  ngOnInit() {
    this.message = "Hello World";
  }

  handleClick(event: Event) {
    console.log(event);
  }

}
