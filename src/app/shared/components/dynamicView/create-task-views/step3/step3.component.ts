import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss',
})
export class Step3Component implements OnInit {
  ngOnInit(): void {
    console.log('<app-step3> renderizado.');
  }
}
