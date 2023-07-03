import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from './carousel/carousel.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CalendarComponent } from './calendar/calendar.component';
import { NewsComponent } from './news/news.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DakarComponent } from './dakar/dakar.component';
import { WrcComponent } from './wrc/wrc.component';
import { F4Component } from './f4/f4.component';
import { SaudiRalliesComponent } from './saudi-rallies/saudi-rallies.component';
import { FormulaEComponent } from './formula-e/formula-e.component';
import { ExtremeEComponent } from './extreme-e/extreme-e.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TablesComponent } from './tables/tables.component';
import { JCCComponent } from './jcc/jcc.component';
import { ImportantnewsComponent } from './importantnews/importantnews.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CalendarComponent,
    NewsComponent,
    DakarComponent,
    WrcComponent,
    F4Component,
    SaudiRalliesComponent,
    FormulaEComponent,
    ExtremeEComponent,
    AboutUsComponent,
    TablesComponent,
    JCCComponent,
    ImportantnewsComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    CarouselModule,
    FontAwesomeModule,
    NgxPaginationModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}
