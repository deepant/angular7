import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  header:string;
  constructor() { }

  ngOnInit() {
    this.header = "Course Cube"
  }

}
