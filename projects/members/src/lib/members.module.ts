import { NgModule } from '@angular/core';
import { MembersComponent } from './members.component';
import {MemberRoutingModule} from './member-routing.module';



@NgModule({
  declarations: [MembersComponent],
  imports: [
    MemberRoutingModule
  ],
  exports: [MembersComponent]
})
export class MembersModule { }
