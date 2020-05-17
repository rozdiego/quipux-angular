import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopheaderComponent } from './component/topheader/topheader.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './component/slider/slider.component';



@NgModule({
  declarations: [
    TopheaderComponent,
    MenuComponent,
    FooterComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopheaderComponent,
    MenuComponent,
    FooterComponent,
    SliderComponent
  ]
})
export class SharedModule { }
