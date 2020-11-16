import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects = [
    { name: 'Academy', link: 'https://waleedomega.github.io/academy/' },
    { name: 'Al-Safa', link: 'https://waleedomega.github.io/alsafa/' },
    { name: 'APG', link: 'https://waleedomega.github.io/apg/' },
    { name: 'Geek', link: 'https://waleedomega.github.io/Geek/' },
    { name: 'Motamez', link: 'https://waleedomega.github.io/motamez/' },
    { name: 'Sticky Notes', link: 'https://waleedomega.github.io/sticky-notes' },
    { name: 'Drum Kit', link: 'https://waleedomega.github.io/JavascriptDrumKit/' },
    { name: 'Flex Panel Image Gallery', link: 'https://waleedomega.github.io/Flex-Panel-Image-Gallery/' },
    { name: 'AJAX Type Ahead', link: 'https://waleedomega.github.io/Ajax-Type-Ahead/' },
    { name: 'Fun with Canvas', link: 'https://waleedomega.github.io/fun-with-html5-canvas/' },
    { name: 'Digital Clock', link: 'https://waleedomega.github.io/Digital-Clock/' },
    { name: 'Custom Video Player', link: 'https://waleedomega.github.io/Custom-Video-Player/' },
    { name: 'Analouge Clock', link: 'https://waleedomega.github.io/Analogue-Clock/' },
    { name: 'Count Down Timer', link: 'https://waleedomega.github.io/CountDown-Timer/' },
    {name:'Whack-A-mole-Game',link:'https://waleedomega.github.io/Whack-A-mole-Game/'}

    
  ];
  resumes = [
    {
      name: 'My Resume', link:'https://drive.google.com/file/d/1PkiOyvQ-aydIX_9IzwG3JSjb-uUsyjE6/view?usp=sharing'
    }
  ]
  codes = [
    { name: 'CodePen', link: 'http://codepen.io/WaleedOMEGA' },
    { name: 'GitHub', link: 'https://github.com/WaleedOMEGA' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
