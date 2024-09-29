import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import LoginForm from './(auth)/sign-in';

export default function App() {
    const handleLogin = () => {
        //Logic here
        console.log("Login Successful")
        //Make API call to back end to validate user
    }


  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text>Welcome to TekTrack!</Text>
      <LoginForm onLogin={handleLogin}/>
      <StatusBar style="auto" />

    </View>
  );
}