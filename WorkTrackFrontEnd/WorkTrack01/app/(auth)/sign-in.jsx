import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState} from 'react'


const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


  return (
    <View className="flex-1 items-center justify-center p-5 bg-gray-100">
      <Text>Already Registered? Log In here.</Text>

      <TextInput 
      placeholder="Username"
      />

      <TextInput 
      placeholder="Password"
      />

      <TouchableOpacity>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignIn