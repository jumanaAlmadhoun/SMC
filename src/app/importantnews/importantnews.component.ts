import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-importantnews',
  templateUrl: './importantnews.component.html',
  styleUrls: ['./importantnews.component.scss']
})
export class ImportantnewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //related to the animation library 
    AOS.init();
  }
  backbar_variable = true;
  @HostListener("document:scroll")
  scrollfunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.backbar_variable = true;
    }
    else {
      this.backbar_variable = false;
    }
  }

}
