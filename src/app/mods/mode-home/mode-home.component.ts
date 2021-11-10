import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mode-home',
  templateUrl: './mode-home.component.html',
  styleUrls: ['./mode-home.component.css']
})
export class ModeHomeComponent implements OnInit {
  modelOpen =false
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.modelOpen = !this.modelOpen
  }

}
