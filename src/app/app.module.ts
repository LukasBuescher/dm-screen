import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatInputModule } from '@angular/material/input'; 
import { CharacterdetailsActionsComponent } from './characterdetails/characterdetails-actions/characterdetails-actions.component';  
import { CharacterdetailsStatsComponent } from './characterdetails/characterdetails-stats/characterdetails-stats.component';
import { CharacterdetailsInventoryComponent } from './characterdetails/characterdetails-inventory/characterdetails-inventory.component';
import { CharacterdetailsComponent } from './characterdetails/characterdetails.component';
import { CharacterdetailsActionsDialogComponent } from './characterdetails/characterdetails-actions/characterdetails-actions-dialog/characterdetails-actions-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterdetailsComponent,
    DashboardComponent,
    ToolbarComponent,
    CharacterdetailsActionsComponent,
    CharacterdetailsStatsComponent,
    CharacterdetailsInventoryComponent,
    CharacterdetailsActionsDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatDividerModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
