import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-extend-barcode-modal',
  templateUrl: './extend-barcode-modal.component.html',
  styleUrls: ['./extend-barcode-modal.component.scss']
})
export class ExtendBarcodeModalComponent {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  closeModal() {
    this.closed.emit();
  }

  onSubmit() {
    // Handle form submission logic here
    this.closeModal();
  }
}
