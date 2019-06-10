import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Bookmarks } from './bookmarks';
import { EntryListModule } from '../shared/entry-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EntryListModule,
    RouterModule.forChild([
      {
        path: '',
        component: Bookmarks
      }
    ])
  ],
  declarations: [Bookmarks]
})
export class BookmarksPageModule {}
