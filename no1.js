import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StyledComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, Expo!</Text>
      <Text style={styles.paragraph}>
        This is an example of how to style components in React Native.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Warna background untuk container
    justifyContent: 'center', // Mengatur isi agar berada di tengah secara vertikal
    alignItems: 'center', // Mengatur isi agar berada di tengah secara horizontal
    padding: 20, // Memberi padding pada seluruh container
  },
  title: {
    fontSize: 24, // Mengatur ukuran font
    fontWeight: 'bold', // Membuat teks tebal
    color: '#333', // Mengatur warna teks
    marginBottom: 10, // Memberi jarak bawah
  },
  paragraph: {
    fontSize: 16, // Ukuran font lebih kecil untuk teks biasa
    color: '#666', // Warna teks yang lebih soft
    textAlign: 'center', // Mengatur teks agar di tengah
  },
});

export default StyledComponent;