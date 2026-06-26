import React, { useState } from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Text, Button, Snackbar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { formatIDR } from '../utils/currency';
import useCartStore from '../store/cartStore';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const addItemToCart = useCartStore((state) => state.addItem);

  const handleIncrement = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItemToCart(product);
    }
    setSnackbarVisible(true);
  };

  const subtotal = product.price * quantity;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>

        <View style={styles.ratingRow}>
          <MaterialCommunityIcons
            name="star"
            size={18}
            color="#FFD700"
          />
          <Text style={styles.rating}>{product.rating} Rating</Text>
          <Text style={styles.stock}>({product.stock} stok tersedia)</Text>
        </View>

        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.priceSection}>
          <Text style={styles.priceLabel}>Harga Satuan:</Text>
          <Text style={styles.price}>{formatIDR(product.price)}</Text>
        </View>

        <View style={styles.quantitySection}>
          <Text style={styles.label}>Jumlah:</Text>
          <View style={styles.quantityControl}>
            <TouchableOpacity
              onPress={handleDecrement}
              style={styles.quantityButton}
            >
              <MaterialCommunityIcons
                name="minus"
                size={24}
                color="#FF6B35"
              />
            </TouchableOpacity>

            <Text style={styles.quantityText}>{quantity}</Text>

            <TouchableOpacity
              onPress={handleIncrement}
              style={styles.quantityButton}
            >
              <MaterialCommunityIcons
                name="plus"
                size={24}
                color="#FF6B35"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.subtotalSection}>
          <Text style={styles.label}>Subtotal:</Text>
          <Text style={styles.subtotalPrice}>{formatIDR(subtotal)}</Text>
        </View>

        <Button
          mode="contained"
          onPress={handleAddToCart}
          style={styles.addButton}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
        >
          Tambah ke Keranjang
        </Button>

        <Button
          mode="outlined"
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabelOutline}
        >
          Kembali
        </Button>
      </View>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={2000}
        style={styles.snackbar}
      >
        Produk berhasil ditambahkan ke keranjang!
      </Snackbar>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    backgroundColor: '#f0f0f0',
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  rating: {
    fontSize: 14,
    color: '#FF6B35',
    fontWeight: '600',
    marginLeft: 4,
  },
  stock: {
    fontSize: 12,
    color: '#999',
    marginLeft: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    marginBottom: 16,
  },
  priceSection: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  priceLabel: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B35',
  },
  quantitySection: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  quantityButton: {
    padding: 8,
  },
  quantityText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subtotalSection: {
    backgroundColor: '#FFF5F0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subtotalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6B35',
  },
  addButton: {
    backgroundColor: '#FF6B35',
    marginBottom: 12,
  },
  backButton: {
    borderColor: '#FF6B35',
  },
  buttonContent: {
    paddingVertical: 8,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  buttonLabelOutline: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF6B35',
  },
  snackbar: {
    backgroundColor: '#333',
  },
});

export default ProductDetailScreen;
