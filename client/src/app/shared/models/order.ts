export interface Order {
  id: number;
  orderDate: string;
  buyerEmail: string;
  shippingAddress: ShippingAddress;
  deliveryMethod: string;
  shippingPrice: number;
  paymentSummary: PaymentSummary;
  orderItems: OrderItem[];
  subtotal: number;
  status: string;
  total: number;
  paymentIntentId: string;
}

export interface ShippingAddress {
  name: string;
  line1: string;
  line2: string | null;
  city: string;
  state: string;
  postalCode: string;
  postal_code: string | null;
  country: string;
}

export interface PaymentSummary {
  last4: number;
  brand: string;
  expMonth: number;
  expYear: number;
}

export interface OrderItem {
  productId: number;
  productName: string;
  pictureUrl: string;
  price: number;
  quantity: number;
}

export interface OrderToCreate {
  cartId: string;
  deliveryMethodId: number;
  shippingAddress: ShippingAddress;
  paymentSummary: PaymentSummary;
}
