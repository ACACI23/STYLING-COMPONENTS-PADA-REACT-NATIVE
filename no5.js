import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BasicStyling = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, React Native!</Text>
      <Text style={styles.subtitle}>This is a subtitle text.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Posisikan konten di tengah secara vertikal
    alignItems: 'center', // Posisikan konten di tengah secara horizontal
    backgroundColor: '#f0f8ff', // Warna background pada View
    padding: 20, // Padding dalam View
  },
  title: {
    fontSize: 30, // Ukuran teks besar
    fontWeight: 'bold', // Membuat teks tebal
    color: '#333', // Warna teks
    marginBottom: 10, // Jarak bawah antara title dan subtitle
  },
  subtitle: {
    fontSize: 18, // Ukuran teks subtitle
    color: '#666', // Warna teks subtitle yang lebih soft
  },
});

export default BasicStyling;
