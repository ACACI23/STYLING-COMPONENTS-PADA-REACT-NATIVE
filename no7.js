import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexboxLayout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Box 1</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Box 2</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Box 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Mengatur arah tata letak secara horizontal
    justifyContent: 'space-around', // Spasi antar View sama rata
    alignItems: 'center', // Pusatkan secara vertikal
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#add8e6', // Warna background pada setiap View
    justifyContent: 'center', // Pusatkan Text di dalam View secara vertikal
    alignItems: 'center', // Pusatkan Text di dalam View secara horizontal
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default FlexboxLayout;
