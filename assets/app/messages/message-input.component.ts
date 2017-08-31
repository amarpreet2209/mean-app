import { NgForm } from '@angular/forms/src/directives';
import { MessageService } from './message.service';
import { Component, OnInit } from '@angular/core';
import { Message } from './message.model';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit {
    message: Message;

    constructor(private messageService: MessageService) {}

    onSubmit(form: NgForm) {  
        if (this.message) {
            // Edit
            this.message.content = form.value.content;
            this.messageService.updateMessage(this.message)
                .subscribe(
                    result => console.log(result)
                );
            this.message = null;
        } else {
            // Create
            const message = new Message(form.value.content, 'Max');
            this.messageService.addMessage(message)
                .subscribe(
                    data => console.log(data),
                    error => console.log(error)
                );                        
        }   
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.message = null;
        form.resetForm(); 
    }

    ngOnInit() {
        this.messageService.messageIsEdit.subscribe(
            (message: Message) => this.message = message
        );     
    }
}