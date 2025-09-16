import { Component } from '@angular/core';
import { WithdrawService } from '../../services/withdraw.service';

@Component({
    selector: 'app-withdraw',
    templateUrl: './withdraw.component.html',
    styleUrls: ['./withdraw.component.scss'],
    standalone: false
})
export class WithdrawComponent {
  selectedMethod: 'bank' | 'stc' = 'bank';
  isWithdrawalSubmittedModalOpen = false;

  constructor(private withdrawService: WithdrawService) {}

  selectMethod(method: 'bank' | 'stc') {
    this.selectedMethod = method;
  }

  onRequestWithdraw() {
    this.withdrawService.requestWithdrawal({ method: this.selectedMethod }).subscribe(() => {
      this.isWithdrawalSubmittedModalOpen = true;
    });
  }
}
