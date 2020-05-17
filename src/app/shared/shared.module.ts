import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopheaderComponent } from './component/topheader/topheader.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TopheaderComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopheaderComponent,
    MenuComponent,
    FooterComponent
  ]
})
export class SharedModule { }
