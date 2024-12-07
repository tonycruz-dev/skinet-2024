import { Component, inject, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { OrderService } from '../../../core/services/order.service';
import { SignalrService } from '../../../core/services/signalr.service';
import { CommonModule } from '@angular/common';
import { PaymentCardPipe } from "../../../shared/pipes/payment-card.pipe";
import { AddressPipe } from "../../../shared/pipes/address.pipe";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-checkout-success',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterModule,
    CommonModule,
    PaymentCardPipe,
    AddressPipe,
    MatProgressSpinnerModule,
  ],
  templateUrl: './checkout-success.component.html',
  styleUrl: './checkout-success.component.scss',
})
export class CheckoutSuccessComponent implements OnDestroy {
  signalrService = inject(SignalrService);
  private orderService = inject(OrderService);

  ngOnDestroy(): void {
    this.orderService.orderComplete = false;
    this.signalrService.orderSignal.set(null);
  }
}
