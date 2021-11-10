import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mode-home',
  templateUrl: './mode-home.component.html',
  styleUrls: ['./mode-home.component.css']
})
export class ModeHomeComponent implements OnInit {
  modelOpen =false

  items = [ 
  { title:'which is the best country to visit', content:'India is the best country ever'},
  { title:'which are the best places in India ', content:'Best places in india are in Rajastan,Kerala,Arnunachal pradesh'},
  { title:'which are the best places in Kerala', content:'Best places in kerala are in Kochi,thalassery,kanyakumari'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.modelOpen = !this.modelOpen
  }

}
