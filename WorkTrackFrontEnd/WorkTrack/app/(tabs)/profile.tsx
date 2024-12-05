import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const Profile = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Logo at the top with padding */}
      <Image 
        source={require('../../assets/images/react-logo.png')} 
        style={styles.logo} 
      />
      {/* Welcome text */}
      <Text style={styles.text}>Welcome to the Profile Screen!</Text>

      {/* Profile Options Table */}
      <View style={styles.table}>
        {/* Personal Information */}
        <View style={styles.row}>
          <Text style={styles.rowText}>Personal Information</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => router.push('/(auth)/personal')}
          >
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Password Reset */}
        <View style={styles.row}>
          <Text style={styles.rowText}>Password Reset</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => router.push('/(auth)/password')}
          >
            <Text style={styles.buttonText}>Change</Text>
          </TouchableOpacity>
        </View>

        {/* Settings */}
        <View style={styles.row}>
          <Text style={styles.rowText}>Settings</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => router.push('/(auth)/settings')}
          >
            <Text style={styles.buttonText}>Open</Text>
          </TouchableOpacity>
        </View>

        {/* Log Out */}
        <View style={styles.row}>
          <Text style={styles.rowText}>Log Out</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => {
              router.push('/')
              console.log('Logged Out');
            }}
          >
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f9f9f9', // Optional: Background color
  },
  logo: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    marginTop: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  table: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  rowText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Profile;
