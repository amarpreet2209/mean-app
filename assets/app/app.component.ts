import { Message } from './messages/message.model';
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    message: Message = new Message('Some message', 'Max');
}