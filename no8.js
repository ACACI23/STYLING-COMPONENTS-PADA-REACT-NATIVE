import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxModelExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Padding and Border</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    padding: 20, // Memberi padding di dalam View
    margin: 10, // Memberi jarak luar View
    borderWidth: 2, // Menambahkan border pada View
    borderColor: '#000', // Warna border
    backgroundColor: '#add8e6', // Warna background pada View
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
});

export default BoxModelExample;
