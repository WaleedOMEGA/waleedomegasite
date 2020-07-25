import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
about= `Experienced coder. A person not afraid of math and statistics. Someone
who is able to implement design through various programming
languages. All these descriptions can go for a good front-end developer.
However, who really is this software professional whose work we can see
literally everywhere on the Internet and without whom we would not be
able to enjoy our favorite websites the way we do? It is someone with
extensive knowledge of technologies like HTML, CSS, and JavaScript.
Someone who gives you (a user) the opportunity to interact with the
website and website applications directly. Finally, someone that makes
sure you can open up and browse the site on any device or in any browser
and the information will still be relevant and easy to read.`;
  constructor() { 
    
  }

ngOnInit(): void {
  }

}
