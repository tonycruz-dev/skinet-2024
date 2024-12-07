import { Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../../core/services/order.service';
import { Order } from '../../shared/models/order';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {
  private orderService = inject(OrderService);
  orders: Order[] = [];

  ngOnInit(): void {
    this.orderService.getOrdersForUser().subscribe({
      next: (orders) => (this.orders = orders),
    });
  }
}
