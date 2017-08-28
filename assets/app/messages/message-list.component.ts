import { Component } from '@angular/core';
import { Message } from './message.model';

@Component({
    selector: 'app-message-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-message 
            *ngFor="let message of messages" 
            [message]="message" 
            (editClicked)="message.content = $event"
             ></app-message>
        </div>
    `
})
export class MessageListComponent {
    messages: Message[] = [
        new Message('Some message', 'Max'),
        new Message('Something else', 'Max'),
        new Message('3rd message', 'Max')
    ]; 
}