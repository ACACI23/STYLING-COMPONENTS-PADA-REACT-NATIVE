import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const PlatformSpecificStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This text will have different styles depending on the platform!
      </Text>
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
    color: 'black',
    ...Platform.select({
      ios: {
        fontWeight: 'bold', // Gaya khusus untuk iOS
        color: 'blue',
      },
      android: {
        fontStyle: 'italic', // Gaya khusus untuk Android
        color: 'green',
      },
    }),
  },
});

export default PlatformSpecificStyles;
