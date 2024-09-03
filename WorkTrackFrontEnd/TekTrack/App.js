// App.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WelcomePage from './pages/WelcomePage';

const App = () => {
  return (
    <View style={styles.container}>
      <WelcomePage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
