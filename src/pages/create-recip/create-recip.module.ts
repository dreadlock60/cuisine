import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateRecipPage } from './create-recip';

@NgModule({
  declarations: [
    CreateRecipPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateRecipPage),
  ],
})
export class CreateRecipPageModule {}
