import { NgModule } from '@angular/core';
import { ItemComponent } from './item/item';
import { ItemDetailComponent } from './item-detail/item-detail';
import { IonicModule } from 'ionic-angular';
@NgModule({
  declarations: [ItemComponent, ItemDetailComponent],
  imports: [IonicModule],
  exports: [ItemComponent, ItemDetailComponent]
})
export class ComponentsModule {}
