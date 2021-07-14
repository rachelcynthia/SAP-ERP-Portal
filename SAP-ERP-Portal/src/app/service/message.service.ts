import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpService:HttpClient) { }

  sendMessage(obj){
    return this.httpService.post('http://localhost:3080/message',obj)
  }
}
