import { Component } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    standalone: false
})
export class ProfileComponent {
  isEditingSocial = false;
  isEditingPersonalInfo = false;
  isExtendBarcodeModalOpen = false;

  user = {
    name: 'Ahmed MO.',
    avatar: 'assets/images/avatar.png',
    bio: 'Social media influencer',
    location: '32 years, Cairo, Egypt',
    firstName: 'Ahmed',
    lastName: 'Mohamed',
    email: 'Ahmedmohamed345@gmail.com',
    phone: '012 345 6789',
    social: {
      facebook: 'https://www.facebook.com/ahmed.mohamed',
      instagram: 'https://www.instagram.com/ahmed.mohamed',
      tiktok: 'https://www.tiktok.com/@ahmed.mohamed'
    },
    barcode: {
      code: '#ahmed123',
      activationStart: '02/2024',
      activationEnd: '05/2024'
    }
  };
}
