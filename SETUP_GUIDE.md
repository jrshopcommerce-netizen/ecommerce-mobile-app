# Setup Guide - JR Shop Commerce

Complete guide to set up and run the e-Commerce app.

## 📋 Prerequisites

- **Node.js**: v14 or higher ([Download](https://nodejs.org/))
- **npm** or **yarn**: Package manager
- **Expo CLI**: `npm install -g expo-cli`

## ⚙️ Installation Steps

### Step 1: Clone Repository

```bash
git clone https://github.com/jrshopcommerce-netizen/ecommerce-mobile-app.git
cd ecommerce-mobile-app
```

### Step 2: Install Dependencies

```bash
npm install
```

Or with yarn:

```bash
yarn install
```

### Step 3: Start Development Server

```bash
npm start
# or
yarn start
```

You'll see a QR code and options to run on different platforms.

### Step 4: Run the App

#### Option A: Android Emulator
```bash
# Press 'a' in the terminal, or run:
npm run android
```

Requirements:
- Android Studio installed
- Android emulator configured

#### Option B: iOS Simulator (Mac only)
```bash
# Press 'i' in the terminal, or run:
npm run ios
```

Requirements:
- Xcode installed
- iOS simulator available

#### Option C: Physical Device
1. Download and install Expo Go app
2. Scan the QR code shown in terminal
3. App will load on your device

## 🏗️ Project Structure Explained

```
ecommerce-mobile-app/
│
├── src/                           # Source code
│   ├── components/               # Reusable UI components
│   │   ├── ProductCard.js        # Product card with image & price
│   │   ├── PaymentMethodCard.js  # Payment method selector
│   │   └── CartItem.js           # Cart item row
│   │
│   ├── screens/                  # App screens/pages
│   │   ├── HomeScreen.js         # Product listing (main page)
│   │   ├── ProductDetailScreen.js # Product details & quantity
│   │   ├── CartScreen.js         # Shopping cart overview
│   │   ├── CheckoutScreen.js     # Checkout with payment method
│   │   └── ProfileScreen.js      # User profile menu
│   │
│   ├── store/                    # State management
│   │   └── cartStore.js          # Zustand cart store
│   │
│   ├── utils/                    # Utility functions
│   │   └── currency.js           # IDR formatting
│   │
│   └── data/                     # Static data
│       └── products.js           # Sample products & payments
│
├── App.js                        # Main app entry & navigation
├── app.json                      # Expo configuration
├── package.json                  # Dependencies
└── README.md                     # Documentation
```

## 🎯 App Navigation

The app uses bottom tab navigation:

1. **Beranda (Home)** 🏠
   - Browse all products
   - Product grid layout
   - Add items to cart

2. **Keranjang (Cart)** 🛒
   - View cart items
   - Adjust quantities
   - See total with tax
   - Proceed to checkout

3. **Profil (Profile)** 👤
   - User account info
   - Order history
   - Settings & preferences
   - Logout

## 💾 Key Files Explained

### App.js
Main app component that sets up:
- Navigation containers
- Bottom tab navigator
- Stack navigators for each tab
- Theme provider (React Native Paper)

### src/store/cartStore.js
Zustand store managing:
- Cart items array
- Add/remove items
- Update quantities
- Calculate totals

### src/utils/currency.js
Utilities for:
- Formatting numbers to IDR
- Parsing IDR strings
- Calculating taxes

### src/data/products.js
Sample data:
- 6 example products
- 6 payment methods
- Product structure

## 🎨 Customization

### Change App Colors

Edit `App.js` to change primary color:

```javascript
// App.js - Around line 30
headerStyle: {
  backgroundColor: '#FF6B35', // Change this color
}

// Tab navigator
tabBarActiveTintColor: '#FF6B35', // Change this too
```

### Add Products

Edit `src/data/products.js`:

```javascript
{
  id: 7,
  name: 'Your Product Name',
  description: 'Product description',
  price: 299000,
  image: 'https://image-url.jpg',
  category: 'Category',
  rating: 4.5,
  stock: 10,
}
```

### Update Payment Methods

Edit `src/data/products.js` in `PAYMENT_METHODS`:

```javascript
{
  id: 7,
  name: 'Your Payment Method',
  icon: 'icon-name', // from MaterialCommunityIcons
  description: 'Description',
}
```

## 🐛 Troubleshooting

### Issue: "npm: command not found"
- Install Node.js from nodejs.org
- Restart terminal
- Try `npm --version`

### Issue: Expo app won't connect
- Ensure device is on same WiFi
- Restart Expo: press `C` in terminal
- Clear cache: `expo cache --clear`

### Issue: Android emulator won't start
- Open Android Studio
- AVD Manager → Create or start virtual device
- Try `npm run android` again

### Issue: Module not found errors
- Clear node_modules: `rm -rf node_modules`
- Reinstall: `npm install`
- Clear cache: `npm cache clean --force`

## 🔗 API Integration

To connect to your backend:

1. Create `src/services/api.js`:
```javascript
import axios from 'axios';

const API_BASE = 'https://your-api.com/api';

export const api = axios.create({
  baseURL: API_BASE,
});
```

2. Update product fetching in `HomeScreen.js`:
```javascript
import { api } from '../services/api';

useEffect(() => {
  const loadProducts = async () => {
    const response = await api.get('/products');
    setProducts(response.data);
  };
  loadProducts();
}, []);
```

3. Set up payment gateway (Midtrans recommended for Indonesia):
- Sign up at midtrans.com
- Get API keys
- Integrate in CheckoutScreen

## 📱 Testing Checklist

- [ ] Products display correctly
- [ ] Add items to cart works
- [ ] Cart total calculates with tax
- [ ] Payment methods show all options
- [ ] Checkout form validates
- [ ] Can complete order
- [ ] Profile menu navigates

## 🚀 Next: Deploy to Production

### Build APK (Android)
```bash
expo build:android
```

### Build IPA (iOS)
```bash
expo build:ios
```

### Submit to App Stores
- Google Play Store
- Apple App Store

## 📚 Resources

- [React Native Docs](https://reactnative.dev/)
- [Expo Docs](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)

## ✅ You're Ready!

Your e-Commerce app is set up and ready to develop. Happy coding! 🎉

Need help? Check the README.md for more info.
