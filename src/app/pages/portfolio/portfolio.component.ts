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
    { name: 'Motamez', link: 'https://waleedomega.github.io/motamez/' }
  ];
  resumes = [
    {
      name: 'My Resume', link:'https://drive.google.com/file/d/1ApyTuQSvWcrxlWlkKfma5Hsns4vOLceJ/view?usp=sharing'
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
