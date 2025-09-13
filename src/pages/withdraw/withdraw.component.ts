import { Component } from '@angular/core';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent {
  selectedMethod: 'bank' | 'stc' = 'bank';
  isWithdrawalSubmittedModalOpen = false;

  selectMethod(method: 'bank' | 'stc') {
    this.selectedMethod = method;
  }
}
