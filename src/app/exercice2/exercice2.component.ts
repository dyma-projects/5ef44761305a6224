import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  @ViewChild('f', { static: true }) someInput: ElementRef;
  public valeur: string;

  constructor() { }

  ngOnInit() {
  }
  onKey(event: any) {
    this.valeur = event.target.value
    //this.values += f.target.value + ' | ';
    console.log(event.target.value);
    console.log(this.someInput.nativeElement.value);

  }
}
