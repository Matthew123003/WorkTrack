import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const Profile = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Image
            source={require('../../assets/images/react-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.headerText}>Profile</Text>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.content}>
        
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
              onPress={() => router.push('/(auth)/lipassword')}
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
                router.push('/');
                console.log('Logged Out');
              }}
            >
              <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#2F4F4F',
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  logo: {
    width: 35,
    height: 35,
    marginRight: 4,
  },
  headerText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  table: {
    width: '100%',
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
    backgroundColor: '#6200ee',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
});

export default Profile;
