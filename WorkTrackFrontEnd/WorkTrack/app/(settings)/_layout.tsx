import { Slot, useNavigation } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';

const SettLayout = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Hide the header for all pages in the settings section
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Slot />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container fills the entire screen
    backgroundColor: '#f5f5f5', // Background color for consistency
  },
});

export default SettLayout;
