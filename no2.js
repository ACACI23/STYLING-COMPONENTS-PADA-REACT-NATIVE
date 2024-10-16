import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const DynamicStyleComponent = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={isActive ? styles.activeText : styles.inactiveText}>
        {isActive ? 'Active Mode' : 'Inactive Mode'}
      </Text>
      <Button
        title={isActive ? 'Deactivate' : 'Activate'}
        onPress={() => setIsActive(!isActive)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 20,
  },
  inactiveText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20,
  },
});

export default DynamicStyleComponent;
