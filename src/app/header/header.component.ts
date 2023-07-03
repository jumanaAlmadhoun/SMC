import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { faSearch, faLongArrowAltRight, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  SearchIcon = faSearch;
  faLongArrowAltRight = faLongArrowAltRight;
  myfaBars = faBars;
  myClose = faClose;
  currentLang!: string;


  constructor(public translate: TranslateService, @Inject(DOCUMENT) private document: Document) {
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);
    let htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = this.translate.currentLang === 'ar' ? 'rtl' : 'ltr';
  }

  changeCurrentLang() {
    let lang = this.translate.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
    let htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  ngOnInit(): void {
  }
  header_variable = false;
  @HostListener("document:scroll")
  scrollfunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.header_variable = true;
    }
    else {
      this.header_variable = false;
    }
  }


}
