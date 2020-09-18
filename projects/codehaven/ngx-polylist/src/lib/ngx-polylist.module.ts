import { NgModule } from '@angular/core';
import { NgxPolylistComponent } from './ngx-polylist.component';
import { CommonModule } from '@angular/common';
import { PolymorpheusModule } from '@tinkoff/ng-polymorpheus';



@NgModule({
  declarations: [NgxPolylistComponent],
  exports: [NgxPolylistComponent],
  imports: [
    CommonModule,
    PolymorpheusModule
  ]
})
export class NgxPolylistModule { }
