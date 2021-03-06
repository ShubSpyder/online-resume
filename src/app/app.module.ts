import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { TimelineComponent } from './content/timeline/timeline.component';
import { LinksComponent } from './header/links/links.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ContentComponent, TimelineComponent, LinksComponent ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
