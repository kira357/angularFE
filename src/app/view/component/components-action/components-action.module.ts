import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchActionComponent } from './search-action/search-action.component';
import { TableActionComponent } from './table-action/table-action.component';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ServiceActionService } from './shared/service-action.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SearchActionComponent, TableActionComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    HttpClientModule,
    
  ],
  providers: [ServiceActionService],
  exports: [SearchActionComponent, TableActionComponent],
})
export class ComponentsActionModule {}
