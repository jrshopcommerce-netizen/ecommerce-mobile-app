import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

/**
 * AppLogo Component
 * Displays JR Shop logo with tagline
 * 
 * Props:
 * - size: 'small' | 'medium' | 'large' (default: 'medium')
 */
const AppLogo = ({ size = 'medium' }) => {
  const sizes = {
    small: {
      width: 60,
      height: 60,
      fontSize: 12,
      spacing: 4,
    },
    medium: {
      width: 100,
      height: 100,
      fontSize: 14,
      spacing: 8,
    },
    large: {
      width: 150,
      height: 150,
      fontSize: 16,
      spacing: 12,
    },
  };

  const currentSize = sizes[size] || sizes.medium;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.logoContainer,
          {
            width: currentSize.width,
            height: currentSize.height,
          },
        ]}
      >
        <Text style={[styles.logoPlaceholder, { fontSize: currentSize.width * 0.6 }]}>
          🐝
        </Text>
      </View>

      <Text
        style={[
          styles.brandName,
          { fontSize: currentSize.fontSize + 4, marginTop: currentSize.spacing },
        ]}
      >
        JR Shop
      </Text>

      <Text
        style={[
          styles.tagline,
          { fontSize: currentSize.fontSize, marginTop: currentSize.spacing / 2 },
        ]}
      >
        Belanja Jadi Mudah, Setiap Saat!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    backgroundColor: '#FFF5F0',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FF6B35',
  },
  logoPlaceholder: {
    fontWeight: 'bold',
  },
  brandName: {
    fontWeight: 'bold',
    color: '#FF6B35',
    letterSpacing: 1,
  },
  tagline: {
    color: '#666',
    fontWeight: '500',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default AppLogo;