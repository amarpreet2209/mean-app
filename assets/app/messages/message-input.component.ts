import { NgForm } from '@angular/forms/src/directives';
import { MessageService } from './message.service';
import { Component } from '@angular/core';
import { Message } from './message.model';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent {

    constructor(private messageService: MessageService) {}

    onSubmit(form: NgForm) {        
        const message = new Message(form.value.content, 'Max');
        this.messageService.addMessage(message)
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            );
        form.resetForm();
    }
}