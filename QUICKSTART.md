# Quick Start Guide - JR Shop Commerce

## 🚀 5-Minute Setup

### 1. Clone & Install
```bash
git clone https://github.com/jrshopcommerce-netizen/ecommerce-mobile-app.git
cd ecommerce-mobile-app
npm install
```

### 2. Start App
```bash
npm start
```

### 3. Run on Device
- **Android**: Press `a`
- **iOS**: Press `i`
- **Phone**: Scan QR code with Expo Go app

## 📱 What You Get

✅ **Complete e-Commerce App**
- Product listing with images, prices in IDR (Rp)
- Shopping cart management
- Multiple payment methods (GoPay, OVO, Dana, Bank Transfer, Credit Card, COD)
- Checkout with customer info collection
- User profile
- Order history

✅ **Modern UI**
- React Native Paper components
- Material Design icons
- Clean, responsive layout
- Smooth navigation

✅ **Production Ready**
- State management with Zustand
- Input validation
- Local storage support
- API integration ready
- Error handling

## 🎯 App Features

### Home Screen 🏠
- Browse all products in grid layout
- View product images, ratings, and prices in IDR
- Add items to cart quickly
- Search functionality (ready for implementation)

### Shopping Cart 🛒
- View all cart items with images
- Adjust quantities (increase/decrease)
- Remove items
- Automatic tax calculation (PPN 10%)
- Proceed to checkout

### Checkout 💳
- Enter customer information (name, phone, address)
- Review order summary
- Select payment method
- Complete purchase

### Profile 👤
- View account information
- Order history
- Settings and preferences
- Logout

## 💰 Payment Methods Supported

1. **GoPay** - Popular e-wallet
2. **OVO** - Digital payment
3. **Dana** - Mobile payment
4. **Bank Transfer** - Manual bank transfer
5. **Credit Card** - Card payments
6. **COD** - Cash on Delivery

## 📊 Currency & Tax

- **Currency**: Indonesian Rupiah (IDR/Rp)
- **Tax**: Automatic PPN 10% calculation
- **Example**: Rp 450.000 + Rp 45.000 (tax) = Rp 495.000

## 🎯 Next Steps

### 1. Customize Brand
```bash
# Add your logo
# Place logo.png in assets/ folder
# Update BRANDING_GUIDE.md for details
```

### 2. Add Your Products
```bash
# Edit src/data/products.js
# Or connect to your API
# See API_DOCUMENTATION.md
```

### 3. Set Up Payment
```bash
# Sign up at midtrans.com
# Get API keys
# Update .env file
# See SETUP_GUIDE.md for details
```

### 4. Deploy
```bash
# Build APK (Android)
expo build:android

# Build IPA (iOS)
expo build:ios

# Submit to app stores
```

## 🧪 Test Shopping Flow

1. **Browse Products**
   - Open app → Beranda (Home) tab
   - See product grid with images and prices

2. **View Product Details**
   - Tap on any product card
   - See full description and rating
   - Adjust quantity
   - Add to cart

3. **Manage Cart**
   - Go to Keranjang (Cart) tab
   - See all items with quantities
   - Adjust quantities or remove items
   - See subtotal, tax, and total

4. **Complete Checkout**
   - Enter name, phone, address
   - Select payment method
   - Tap "Bayar" (Pay)
   - Order confirmed!

## 🛠️ Customization

### Change Primary Color
Edit `App.js`:
```javascript
headerStyle: {
  backgroundColor: '#FF6B35', // Change this
}

tabBarActiveTintColor: '#FF6B35', // And this
```

### Add New Product
Edit `src/data/products.js`:
```javascript
{
  id: 7,
  name: 'Your Product',
  description: 'Description',
  price: 299000,
  image: 'https://image-url.jpg',
  category: 'Category',
  rating: 4.5,
  stock: 10,
}
```

### Connect to Your API
Create `src/services/api.js` and update endpoints:
```javascript
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL;

export const api = axios.create({
  baseURL: API_BASE,
});

export const getProducts = () => api.get('/products');
export const createOrder = (data) => api.post('/orders', data);
```

## 🐛 Troubleshooting

### "npm: command not found"
- Install Node.js from nodejs.org
- Restart terminal
- Try `npm --version`

### "Expo app won't connect"
- Restart Expo: press `C` in terminal
- Clear cache: `expo cache --clear`
- Check device is on same WiFi

### "Module not found"
```bash
rm -rf node_modules
npm install
```

### "Port already in use"
```bash
lsof -i :19000
kill -9 <PID>
```

## 📚 Documentation

- **README.md** - Full project overview
- **SETUP_GUIDE.md** - Detailed installation
- **DEVELOPMENT_GUIDE.md** - Development practices
- **BRANDING_GUIDE.md** - Logo and branding
- **API_DOCUMENTATION.md** - Backend API specs

## 💡 Pro Tips

1. **Use Expo Go app** for quick testing on phone
2. **Hot reload** - Changes update automatically
3. **Debug** - Shake device to open debug menu
4. **Performance** - Use React DevTools Profiler
5. **Testing** - Test on real device, not just emulator

## 🚀 You're Ready!

Your complete e-Commerce app is ready to use and customize.

**Next: Read SETUP_GUIDE.md for detailed instructions** 📖

---

**Happy Coding!** 🎉