import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  constructor(private router: Router) { }

  goToDates(){
    this.router.navigate(['/fechas']);
  }

  download(){
    const url = `https://drive.google.com/uc?export=download&id=1T5tA4lrZNUrdK1TvXmTRe4uwGypn1Mls`;
    window.open(url, '_blank');
  }
  
}
