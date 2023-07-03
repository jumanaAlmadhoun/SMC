import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-jcc',
  templateUrl: './jcc.component.html',
  styleUrls: ['./jcc.component.scss']
})
export class JCCComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //related to the animation library 
    AOS.init();
  }

}
