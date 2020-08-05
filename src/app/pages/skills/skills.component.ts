import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewChecked{


  skills = [
    { name: 'HTML5', percentage: 90, color: '#c0392b'},
    { name: 'CSS3', percentage: 90, color:'#1199ff'},
    { name: 'EcmaScript6', percentage: 90, color:'#9b59b6'},
    { name: 'JQuery', percentage: 80, color:'#ffa500'},
    { name: 'Responsive Web Design', percentage: 90, color:'#27ae60'},
    { name: 'Bootstrap 4', percentage: 85, color:'#c0392b'},
    { name: 'Pug Js', percentage: 80, color:'#1199ff'},
    { name: 'Sass', percentage: 80, color:'#9b59b6'},
    { name: 'Gulp Js', percentage: 70, color:'#ffa500'},
    { name: 'Git', percentage: 80, color:'#27ae60'},
    { name: 'BEM', percentage: 75, color:'#c0392b'},
    { name: 'TypeScript', percentage: 85, color: '#1199ff'},
    { name: 'Angular', percentage: 85, color: '#9b59b6'},
    { name: 'Angular Material', percentage: 75, color: '#ffa500'},
  ];
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewChecked() {
    let bars = document.querySelectorAll('.progress-bar') as any as HTMLElement[];

    for (let i = 0; i < bars.length; i++) {

        bars[i].style.width = this.skills[i].percentage + '%';


    }
  }

}
