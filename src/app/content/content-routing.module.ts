import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';
import { HomeComponent } from './home/home.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'episodios', component: EpisodesComponent },
      { path: 'contato', component: AboutComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    ContentComponent,
    RouterModule
  ],
  declarations: [
    AboutComponent,
    ContentComponent,
    EpisodesComponent,
    HomeComponent
  ]
})
export class ContentRoutingModule { }
