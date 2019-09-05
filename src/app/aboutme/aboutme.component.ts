import { Component, OnInit, Output } from '@angular/core';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  message: string;
 

  constructor(private data: HeroService) { }

  ngOnInit() {
    this.newMessage();
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.data.changeMessage("ABOUT ME")
  }
    
  Skill() {
    this.data.changeMessage("Skill");
    console.log(this.message);
  }
  project() {
    this.data.changeMessage("Project");
    console.log(this.message);
  }

  
 


 
}
