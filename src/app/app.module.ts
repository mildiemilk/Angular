import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {Routes,RouterModule} from "@angular/router";
import { CollapseModule } from 'ng2-bootstrap/collapse';


import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';

import { PageListComponent } from './pages/page-list/page-list.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import { SchoolComponent } from './pages/school/school.component';
import { SkillComponent } from './pages/skill/skill.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { InterestedComponent } from './pages/interested/interested.component';
import { IgetdormComponent } from './pages/igetdorm/igetdorm.component';


const appRoutes: Routes =[
  { path: '', component: HomeComponent },
  { path: 'topic', component: PageListComponent },
  { path: 'about', component: DialogComponent },
  { path: 'education', component: SchoolComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'interested', component: InterestedComponent },
  { path: 'igetdorm', component: IgetdormComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'experience', component: ExperienceComponent },

]

@NgModule({
  declarations: [
    [CollapseDirective],
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PageListComponent,
    DialogComponent,
    SchoolComponent,
    SkillComponent,
    ExperienceComponent,
    ActivityComponent,
    InterestedComponent,
    IgetdormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
