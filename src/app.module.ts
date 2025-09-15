import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OverviewComponent } from './pages/overview/overview.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WithdrawComponent } from './pages/withdraw/withdraw.component';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';
import { ModalComponent } from './components/modal/modal.component';
import { CommissionModalComponent } from './components/modals/commission-modal.component';
import { DiscountModalComponent } from './components/modals/discount-modal.component';
import { ExtendBarcodeModalComponent } from './components/modals/extend-barcode-modal.component';
import { WithdrawalSubmittedModalComponent } from './components/modals/withdrawal-submitted-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    ProfileComponent,
    WithdrawComponent,
    HeaderComponent,
    SidebarComponent,
    CardComponent,
    TableComponent,
    ModalComponent,
    CommissionModalComponent,
    DiscountModalComponent,
    ExtendBarcodeModalComponent,
    WithdrawalSubmittedModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
