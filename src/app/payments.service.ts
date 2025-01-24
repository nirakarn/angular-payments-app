import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {
  constructor() {}

  getPayments() {
    return [
      { amount: 100, paymentMethod: 'Credit Card', paymentDate: '2025-01-01' },
      { amount: 200, paymentMethod: 'PayPal', paymentDate: '2025-01-05' },
      { amount: 150, paymentMethod: 'Bank Transfer', paymentDate: '2025-01-10' },
    ];
  }
}
