import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule} from '@angular/material/grid-list'; 
import { MatListModule } from '@angular/material/list'; 
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider'; 
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CharacterdetailsActionsComponent } from './characterdetails/characterdetails-actions/characterdetails-actions.component';  
import { CharacterdetailsStatsComponent } from './characterdetails/characterdetails-stats/characterdetails-stats.component';
import { CharacterdetailsInventoryComponent } from './characterdetails/characterdetails-inventory/characterdetails-inventory.component';
import { CharacterdetailsComponent } from './characterdetails/characterdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterdetailsComponent,
    DashboardComponent,
    ToolbarComponent,
    CharacterdetailsActionsComponent,
    CharacterdetailsStatsComponent,
    CharacterdetailsInventoryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    MatChipsModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
