import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Browse } from './browse';
import { EntryListModule } from '../shared/entry-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EntryListModule,
    RouterModule.forChild([
      {
        path: '',
        component: Browse
      }
    ])
  ],
  declarations: [Browse]
})
export class BrowsePageModule {}
