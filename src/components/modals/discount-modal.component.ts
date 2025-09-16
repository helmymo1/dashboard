import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-discount-modal',
    templateUrl: './discount-modal.component.html',
    styleUrls: ['./discount-modal.component.scss'],
    standalone: false
})
export class DiscountModalComponent {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  closeModal() {
    this.closed.emit();
  }
}
