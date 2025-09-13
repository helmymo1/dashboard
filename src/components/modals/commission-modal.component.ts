import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-commission-modal',
  templateUrl: './commission-modal.component.html',
  styleUrls: ['./commission-modal.component.scss']
})
export class CommissionModalComponent {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  closeModal() {
    this.closed.emit();
  }
}
