import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  isCommissionModalOpen = false;
  isDiscountModalOpen = false;
  selectedSubscriptionPeriod: 'month' | '6-months' | 'yearly' = 'month';

  selectSubscriptionPeriod(period: 'month' | '6-months' | 'yearly') {
    this.selectedSubscriptionPeriod = period;
  }
}
