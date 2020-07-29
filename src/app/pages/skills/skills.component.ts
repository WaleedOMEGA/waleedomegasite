import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewChecked{
  widthnow =0

  skills = [
    { name: 'HTML5', percentage: 90, color: '#c0392b', widthnow:0},
    { name: 'CSS3', percentage: 90, color:'#1199ff',widthnow:0},
    { name: 'EcmaScript6', percentage: 90, color:'#9b59b6',widthnow:0},
    { name: 'JQuery', percentage: 80, color:'#ffa500',widthnow:0},
    { name: 'Responsive Web Design', percentage: 90, color:'#27ae60',widthnow:0},
    { name: 'Bootstrap 4', percentage: 85, color:'#c0392b',widthnow:0},
    { name: 'Pug Js', percentage: 80, color:'#1199ff',widthnow:0},
    { name: 'Sass', percentage: 80, color:'#9b59b6',widthnow:0},
    { name: 'Gulp Js', percentage: 70, color:'#ffa500',widthnow:0},
    { name: 'Git', percentage: 80, color:'#27ae60',widthnow:0},
    { name: 'BEM', percentage: 75, color:'#c0392b',widthnow:0},
    { name: 'TypeScript', percentage: 85, color: '#1199ff', widthnow: 0},
    { name: 'Angular', percentage: 85, color: '#9b59b6', widthnow: 0},
    { name: 'Angular Material', percentage: 75, color: '#ffa500', widthnow: 0},
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
