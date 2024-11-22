// /app/(tabs)/index.tsx
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useLogin } from '../../context/LoginContext';

export default function DashboardScreen() {
  const { isLoggedIn } = useLogin();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/'); // Redirect to login screen if not logged in
    }
  }, [isLoggedIn, router]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
