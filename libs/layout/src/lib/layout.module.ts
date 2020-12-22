import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';

import { MaterialModule } from '@nx-workspace/material'; // Added
import { RouterModule } from '@angular/router';
import { LayoutFormComponent } from './components/layout-form/layout-form.component'; // Added

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule], // Added
  declarations: [LayoutComponent, LayoutFormComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
