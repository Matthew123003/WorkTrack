// /app/(auth)/_layout.tsx
import { Slot } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const AuthLayout = () => {
  return (
    <View style={styles.container}>
      {/* The Slot component is where child routes like signUp.tsx will be rendered */}
      <Slot />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Optional background color
    padding: 20,
  },
});

export default AuthLayout;
