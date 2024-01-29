import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountHomeComponent } from './pages/account-home/account-home.component';
import { AccountGestionComponent } from './components/feature/account-gestion/account-gestion.component';
import { UserDescriptionComponent } from './components/ui/user-description/user-description.component';


@NgModule({
  declarations: [
    AccountHomeComponent,
    AccountGestionComponent,
    UserDescriptionComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
