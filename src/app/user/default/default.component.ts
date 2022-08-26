import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit AfterViewInit{
  @ViewChild('authPass', {static: false}) input;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    alertMe() {
      input.classList.remove("d-none");
      input.classList.add("d-flex");
    }
  }
}
