import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-withdrawal-submitted-modal',
    templateUrl: './withdrawal-submitted-modal.component.html',
    styleUrls: ['./withdrawal-submitted-modal.component.scss'],
    standalone: false
})
export class WithdrawalSubmittedModalComponent {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  closeModal() {
    this.closed.emit();
  }
}
