# Complete Development Guide

## 🎯 Getting Started

### 1. Prerequisites
- Node.js v14+
- npm or yarn
- Expo CLI: `npm install -g expo-cli`
- Android Studio / Xcode (for emulators)

### 2. Initial Setup

```bash
# Clone repository
git clone https://github.com/jrshopcommerce-netizen/ecommerce-mobile-app.git
cd ecommerce-mobile-app

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Update .env with your API URLs and keys
nano .env
```

### 3. Start Development

```bash
# Start Expo server
npm start

# Run on Android emulator
npm run android

# Run on iOS simulator (Mac only)
npm run ios

# Run on web
npm run web
```

## 📱 Project Architecture

### Component Structure
```
Components/
├── ProductCard          # Product display
├── PaymentMethodCard    # Payment selection
└── CartItem             # Cart item display
```

### Screen Structure
```
Screens/
├── HomeScreen           # Product listing
├── ProductDetailScreen  # Product details
├── CartScreen           # Cart management
├── CheckoutScreen       # Payment & checkout
├── ProfileScreen        # User profile
└── OrderHistoryScreen   # Order history
```

### State Management (Zustand)
```
Stores/
├── cartStore            # Cart state
├── authStore            # Auth state
└── orderStore           # Order state
```

## 🔌 API Integration

### Setup API Service

1. Create `src/services/api.js` (template provided)
2. Configure `API_BASE_URL` in `.env`
3. Implement authentication interceptors
4. Handle error responses

### Example API Call

```javascript
import { getProducts } from '../services/api';

useEffect(() => {
  const loadProducts = async () => {
    try {
      const products = await getProducts();
      setProducts(products);
    } catch (error) {
      Alert.alert('Error', 'Failed to load products');
    }
  };
  
  loadProducts();
}, []);
```

## 💳 Payment Integration

### Midtrans Setup

1. Sign up at [midtrans.com](https://midtrans.com)
2. Get Server Key and Client Key
3. Add to `.env`:
```env
MIDTRANS_CLIENT_KEY=your_key
MIDTRANS_SERVER_KEY=your_key
MIDTRANS_ENVIRONMENT=sandbox
```

4. Implement payment in CheckoutScreen:
```javascript
import { getPaymentToken } from '../services/payment';

const handlePayment = async () => {
  const token = await getPaymentToken(orderData.orderId);
  // Redirect to payment gateway
};
```

## 🗄️ Local Storage

### Save/Load Cart
```javascript
import { saveCart, loadCart } from '../utils/storage';

// Save cart
await saveCart(cartItems);

// Load cart on app start
const savedCart = await loadCart();
```

## 🎨 Customization

### Change Colors
Edit `App.js`:
```javascript
headerStyle: {
  backgroundColor: '#FF6B35', // Change primary color
}
```

### Add New Product
Edit `src/data/products.js`:
```javascript
{
  id: 7,
  name: 'Product Name',
  price: 100000,
  // ... other fields
}
```

### Add New Screen
1. Create screen file: `src/screens/NewScreen.js`
2. Add to navigation in `App.js`
3. Add tab if needed

## 🧪 Testing

### Test Cart Functionality
```javascript
// Add item
addItem(product);

// Check total
const total = getTotal();

// Remove item
removeItem(productId);
```

### Test Checkout
```javascript
// Validate data
const { isValid, errors } = validateCheckoutData(formData);

// Create order
createOrder(orderData);
```

## 📊 Debugging

### Enable Debug Menu
Shake device to open debug menu

### Console Logging
```javascript
console.log('Debug info:', variable);
```

### React Native Debugger
1. Download from [github.com/jhen0409/react-native-debugger](https://github.com/jhen0409/react-native-debugger)
2. Open debugger
3. Start app with Expo
4. Debugger auto-connects

## 🚀 Performance Optimization

### Image Optimization
```javascript
<Image
  source={{ uri: product.image }}
  style={styles.image}
  resizeMode="cover"
/>
```

### Lazy Loading
```javascript
const HomeScreen = lazy(() => import('./HomeScreen'));
```

### Memoization
```javascript
import { memo } from 'react';

const ProductCard = memo(({ product }) => {
  // Component
});
```

## 📦 Dependencies

### Core
- react-native
- expo
- @react-navigation/native

### UI
- react-native-paper
- react-native-vector-icons

### State
- zustand

### HTTP
- axios

### Storage
- @react-native-async-storage/async-storage

## 🐛 Common Issues

### Issue: Module not found
```bash
rm -rf node_modules
npm install
```

### Issue: Expo won't connect
```bash
# Clear cache
expo cache --clear

# Restart Expo
# Press C in terminal
```

### Issue: Port already in use
```bash
# Kill process on port 19000
lsof -i :19000
kill -9 <PID>
```

## 📚 Resources

- [React Native Docs](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Native Paper](https://callstack.github.io/react-native-paper/)

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/feature-name`
2. Make changes
3. Commit: `git commit -m 'Add feature'`
4. Push: `git push origin feature/feature-name`
5. Create Pull Request

## 📝 Code Style

- Use ES6+ syntax
- Use meaningful variable names
- Add comments for complex logic
- Follow React best practices
- Use functional components with hooks

## 🚀 Deployment

### Build APK (Android)
```bash
expo build:android
```

### Build IPA (iOS)
```bash
expo build:ios
```

### Submit to Stores
- Google Play Store
- Apple App Store

---

**Happy Coding! 🎉**
