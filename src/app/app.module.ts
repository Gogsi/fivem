import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NguiTabModule } from '@ngui/tab';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { TranslationModule } from 'angular-l10n';
import { NouisliderModule } from 'ng2-nouislider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BottomNavComponent } from './bottom-nav.component';
import { HomeComponent } from './home.component';

import { ServerListComponent } from './servers/ui/server-list.component';
import { ServerListingComponent } from './servers/ui/server-listing.component';
import { ServerListingItemComponent } from './servers/ui/server-listing-item.component';
import { ServerHeadingComponent } from './servers/ui/server-heading.component';
import { ServerFilterComponent } from './servers/ui/server-filter.component';

import { ServersService } from './servers/servers.service';

import { ColorizePipe } from './colorize.pipe';
import { EscapePipe } from './escape.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BottomNavComponent,
    HomeComponent,
    ServerListComponent,
    ServerListingComponent,
    ServerListingItemComponent,
    ServerHeadingComponent,
    ServerFilterComponent,
    ColorizePipe,
    EscapePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NguiTabModule,
    VirtualScrollModule,
    NouisliderModule,
    TranslationModule.forRoot()
  ],
  providers: [
    ServersService
  ],
  bootstrap: [
    AppComponent
  ]
}) 
export class AppModule { }
