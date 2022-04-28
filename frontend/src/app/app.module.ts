import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AddPurchaseComponent } from './add-purchase/add-purchase.component';
import { ListComponent } from './checks/list/list.component';
import { DepositComponent } from './checks/deposit/deposit.component';
import { DetailsComponent } from './admin/checks/details/details.component';
import { AdminChecksListComponent } from './admin/checks/admin-checks-list/admin-checks-list.component';
import { AdminChecksDetailsComponent } from './admin/checks/admin-checks-details/admin-checks-details.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ExpensesComponent,
    AddPurchaseComponent,
    ListComponent,
    DepositComponent,
    DetailsComponent,
    AdminChecksListComponent,
    AdminChecksDetailsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
