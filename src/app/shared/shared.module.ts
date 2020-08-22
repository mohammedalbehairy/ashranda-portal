import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FixedFooterComponent } from './components/footer/fixed-footer/fixed-footer.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    FixedFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
