import { Routes } from '@angular/router';
import { PaymentsComponent } from './payments/payments.component';

export const routes: Routes = [
  { path: '', redirectTo: 'payments', pathMatch: 'full' },
  { path: 'payments', component: PaymentsComponent },
];
