import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TicketInfoService } from '../ticket-info.service'
import { IonicModule } from '@ionic/angular';

import { TicketInfoPage } from './ticket-info.page';

const routes: Routes = [
  {
    path: '',
    component: TicketInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TicketInfoPage]
})
export class TicketInfoPageModule {
}
