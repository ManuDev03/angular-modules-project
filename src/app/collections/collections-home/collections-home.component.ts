import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  partoflink ='manu'
  data = [
    {name:'max',age:25,job:'Designer'},
    {name:'manu',age:27,job:'Painter'},
    {name:'maverik',age:29,job:'Rider'}

  ]

  headers = [
    {key:'name',label:'Name'},
    {key:'age',label:'age'},
    {key:'job',label:'job'}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
