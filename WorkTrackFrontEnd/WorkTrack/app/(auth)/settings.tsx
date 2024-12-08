import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const Settings = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Logo at the top with padding */}
      <Image 
        source={require('../../assets/images/react-logo.png')} 
        style={styles.logo} 
      />
      {/* Welcome text */}
      <Text style={styles.text}>Welcome to the Settings Screen!</Text>

      {/* Settings Options Table */}
      <View style={styles.table}>
        {/* Option 1 */}
        <View style={styles.row}>
          <Text style={styles.rowText}>Option 1</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => {
              console.log('Option 1 button pressed');
              router.push('/(settings)/option1');
            }}
          >
            <Text style={styles.buttonText}>Go</Text>
          </TouchableOpacity>
        </View>

        {/* Option 2 */}
        <View style={styles.row}>
          <Text style={styles.rowText}>Option 2</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => {
              console.log('Option 2 button pressed');
              router.push('/(settings)/option2');
            }}
          >
            <Text style={styles.buttonText}>Go</Text>
          </TouchableOpacity>
        </View>

        {/* Option 3 */}
        <View style={styles.row}>
          <Text style={styles.rowText}>Option 3</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => {
              console.log('Option 3 button pressed');
              router.push('/(settings)/option3');
            }}
          >
            <Text style={styles.buttonText}>Go</Text>
          </TouchableOpacity>
        </View>

        {/* Option 4 */}
        <View style={styles.row}>
          <Text style={styles.rowText}>Option 4</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => {
              console.log('Option 4 button pressed');
              router.push('/(settings)/option4');
            }}
          >
            <Text style={styles.buttonText}>Go</Text>
          </TouchableOpacity>
        </View>

        {/* Option 5 */}
        <View style={styles.row}>
          <Text style={styles.rowText}>Option 5</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => {
              console.log('Option 5 button pressed');
              router.push('/(settings)/option5');
            }}
          >
            <Text style={styles.buttonText}>Go</Text>
          </TouchableOpacity>
        </View>

        {/* Option 6 */}
        <View style={styles.row}>
          <Text style={styles.rowText}>Option 6</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => {
              console.log('Option 6 button pressed');
              router.push('/(settings)/option6');
            }}
          >
            <Text style={styles.buttonText}>Go</Text>
          </TouchableOpacity>
        </View>

        {/* Option 7 */}
        <View style={styles.row}>
          <Text style={styles.rowText}>Option 7</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => {
              console.log('Option 7 button pressed');
              router.push('/(settings)/option7');
            }}
          >
            <Text style={styles.buttonText}>Go</Text>
          </TouchableOpacity>
        </View>

        {/* Option 8 */}
        <View style={styles.row}>
          <Text style={styles.rowText}>Option 8</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => {
              console.log('Option 8 button pressed');
              router.push('/(settings)/option8');
            }}
          >
            <Text style={styles.buttonText}>Go</Text>
          </TouchableOpacity>
        </View>

        {/* Option 9 */}
        <View style={styles.row}>
          <Text style={styles.rowText}>Option 9</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => {
              console.log('Option 9 button pressed');
              router.push('/(settings)/option9');
            }}
          >
            <Text style={styles.buttonText}>Go</Text>
          </TouchableOpacity>
        </View>

        {/* Option 10 */}
        <View style={styles.row}>
          <Text style={styles.rowText}>Option 10</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => {
              console.log('Option 10 button pressed');
              router.push('/(settings)/option10');
            }}
          >
            <Text style={styles.buttonText}>Go</Text>
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

export default Settings;
