import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-about-contact',
  templateUrl: './about-contact.component.html',
  styleUrls: ['./about-contact.component.css']
})
export class AboutContactComponent implements OnInit {

  constructor(private messageService:MessageService) { }
  messages:string;
  ngOnInit(): void {

  }

  onSubmit(form:NgForm){
    console.log(form.value)
    this.messageService.sendMessage(form.value).subscribe((data)=>{
      if(data["sent"]==1){
        alert("Message Sent!")
      }
      else{
        alert("Enter proper email")
      }
    })
    window.location.reload();
  }

}
