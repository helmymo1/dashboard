import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  isCommissionModalOpen = false;
  isDiscountModalOpen = false;

  constructor(private router: Router) {}

  navigateToSubscriptionDetails(period: 'month' | '6-months' | 'yearly') {
    // This is a placeholder navigation. You might need to update the route path and parameters.
    this.router.navigate(['/subscription', period]);
  }
}
