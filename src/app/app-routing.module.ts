import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NewsComponent } from './news/news.component';
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



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'news', component: NewsComponent },
  { path: 'dakar', component: DakarComponent },
  { path: 'wrc', component: WrcComponent },
  { path: 'f4', component: F4Component },
  { path: 'saudi-rallies', component: SaudiRalliesComponent },
  { path: 'formulaE', component: FormulaEComponent },
  { path: 'extremeE', component: ExtremeEComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'JCC', component: JCCComponent },
  { path: 'importantNews', component: ImportantnewsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
