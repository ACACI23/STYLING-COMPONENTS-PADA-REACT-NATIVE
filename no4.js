import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // Mendapatkan lebar dan tinggi layar

const ResponsiveComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen Width: {width}</Text>
      <Text style={styles.text}>Screen Height: {height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    padding: width * 0.05, // Padding tergantung pada ukuran layar
  },
});

export default ResponsiveComponent;
