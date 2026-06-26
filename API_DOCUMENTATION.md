## JR Shop Commerce - API Documentation

### Base URL
```
https://api.your-server.com/api
```

### Authentication
All requests require authentication header:
```
Authorization: Bearer YOUR_TOKEN
```

---

## Products Endpoints

### Get All Products
```
GET /products
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Product Name",
      "description": "Description",
      "price": 450000,
      "image": "https://...",
      "category": "Category",
      "rating": 4.5,
      "stock": 15
    }
  ]
}
```

### Get Product by ID
```
GET /products/:id
```

### Search Products
```
GET /products/search?q=keyword
```

---

## Cart Endpoints

### Create Order from Cart
```
POST /orders
```

**Request:**
```json
{
  "items": [
    {
      "productId": 1,
      "quantity": 2
    }
  ],
  "customerName": "John Doe",
  "customerPhone": "081234567890",
  "customerAddress": "Jl. Example No. 1",
  "paymentMethod": "GoPay",
  "subtotal": 900000,
  "tax": 90000,
  "total": 990000
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "orderId": "ORD001",
    "status": "pending",
    "createdAt": "2026-06-26T10:00:00Z"
  }
}
```

---

## Payment Endpoints

### Get Payment Token (Midtrans)
```
POST /payment/token
```

**Request:**
```json
{
  "orderId": "ORD001",
  "amount": 990000,
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "customerPhone": "081234567890"
}
```

**Response:**
```json
{
  "success": true,
  "token": "4e1e1d2a93d7f3f1c1d1b1a1d1e1f1a1",
  "redirect_url": "https://app.sandbox.midtrans.com/snap/v2/..."
}
```

### Verify Payment
```
POST /payment/verify
```

**Request:**
```json
{
  "orderId": "ORD001",
  "transactionId": "1234567890"
}
```

---

## User Endpoints

### Get User Profile
```
GET /users/:userId
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "user1",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "081234567890"
  }
}
```

### Update User Profile
```
PUT /users/:userId
```

**Request:**
```json
{
  "name": "John Doe Updated",
  "phone": "081234567890"
}
```

### Get Order History
```
GET /users/:userId/orders
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "orderId": "ORD001",
      "date": "2026-06-20",
      "total": 990000,
      "status": "delivered",
      "items": 2,
      "paymentMethod": "GoPay"
    }
  ]
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "error": "Validation error",
  "message": "Invalid phone number format"
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "error": "Unauthorized",
  "message": "Invalid or missing authentication token"
}
```

### 404 Not Found
```json
{
  "success": false,
  "error": "Not found",
  "message": "Product not found"
}
```

### 500 Server Error
```json
{
  "success": false,
  "error": "Server error",
  "message": "Internal server error"
}
```

---

## Example Usage

### Fetch Products
```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.your-server.com/api',
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN'
  }
});

// Get products
const products = await api.get('/products');

// Search
const results = await api.get('/products/search?q=sepatu');
```

### Create Order
```javascript
const orderData = {
  items: [
    { productId: 1, quantity: 2 }
  ],
  customerName: 'John Doe',
  customerPhone: '081234567890',
  customerAddress: 'Jl. Example No. 1',
  paymentMethod: 'GoPay',
  subtotal: 900000,
  tax: 90000,
  total: 990000
};

const response = await api.post('/orders', orderData);
```

### Process Payment
```javascript
const paymentData = {
  orderId: 'ORD001',
  amount: 990000,
  customerName: 'John Doe',
  customerEmail: 'john@example.com',
  customerPhone: '081234567890'
};

const paymentResponse = await api.post('/payment/token', paymentData);
const token = paymentResponse.data.token;

// Redirect to Midtrans
// window.snap.pay(token);
```

---

## Rate Limiting

- Requests per minute: 60
- Requests per hour: 3000

## Timeout

- Request timeout: 10 seconds
- Connection timeout: 5 seconds

---

## Support

For API support, contact: api-support@jrshop.com

---

**API Version**: 1.0
**Last Updated**: 2026-06-26
