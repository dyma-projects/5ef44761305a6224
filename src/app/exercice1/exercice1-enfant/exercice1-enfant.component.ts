import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  
  compteurEnfant: number = 0;
  @Input() parentCompteur: string;
  @Output() pickEvent: EventEmitter<{}> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  increaseCompteur(): void {
    this.compteurEnfant++
    this.pickEvent.emit({ value: this.compteurEnfant });
  }
  decreaseCompteur(): void {
    this.compteurEnfant--
    this.pickEvent.emit({ value: this.compteurEnfant });
  }
}
