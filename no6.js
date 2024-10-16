import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const DynamicStyling = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </Text>
      <Button title="Toggle Mode" onPress={() => setIsDarkMode(!isDarkMode)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  lightContainer: {
    backgroundColor: '#ffffff',
  },
  darkContainer: {
    backgroundColor: '#333333',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  lightText: {
    color: '#000000',
  },
  darkText: {
    color: '#ffffff',
  },
});

export default DynamicStyling;
