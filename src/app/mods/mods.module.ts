import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModeHomeComponent } from './mode-home/mode-home.component';
import { ModalComponent } from './modal/modal.component';
import { SharedModule} from '../shared/shared.module'


@NgModule({
  declarations: [
    ModeHomeComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule,
    SharedModule

  ]
})
export class ModsModule { }
