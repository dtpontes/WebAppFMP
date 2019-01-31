
import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import * as Material from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
  CommonModule, 
  Material.MatToolbarModule,
  Material.MatButtonModule, 
  Material.MatCardModule,
  Material.MatInputModule,
  Material.MatDialogModule,
  Material.MatTableModule,
  Material.MatMenuModule,
  Material.MatIconModule,
  Material.MatProgressSpinnerModule,
  BrowserAnimationsModule,
  MatSelectModule,
  Material.MatDialogModule,
  MatGridListModule,
  MatTableModule,
  Material.MatPaginatorModule,
  Material.MatSortModule,
  MatTooltipModule,
  MatCheckboxModule
  ],
  exports: [
  CommonModule,
    Material.MatToolbarModule, 
    Material.MatButtonModule, 
    Material.MatCardModule, 
    Material.MatInputModule, 
    Material.MatDialogModule, 
    Material.MatTableModule, 
    Material.MatMenuModule,
    Material.MatIconModule,
    Material.MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatSelectModule,
    Material.MatDialogModule,
    MatGridListModule,
    MatTableModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    MatTooltipModule,
    MatCheckboxModule
   ],
})
export class CustomMaterialModule { }