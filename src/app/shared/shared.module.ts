import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PagesModule } from '../pages/pages.module';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ComponentModule } from '../componets/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NopagefoundComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NopagefoundComponent,
    ComponentModule
  ]
})
export class SharedModule { }
