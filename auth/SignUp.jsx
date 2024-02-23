import { View, Text, TextInput, SafeAreaView, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const SignUp = () => {
  return (
    <SafeAreaView className="pt-10">
      <View className=" flex-1 justify-center items-center">
        <View className="email-group">
          <Text> E-Mail</Text>
          <TextInput />
        </View>
      </View>
      <View>
        <View className="password-group">
          <Text> Password </Text>
          <TextInput />
          <Text>Ovdje ide za show password btn</Text>
        </View>
      </View>
      <View className="auth-group">
        <Button>Create Account</Button>
        <Text> Already have an Account? Login here.</Text>
      </View>
      <View className="other-signin-methods">
        <View className="linija"></View>
        <TouchableOpacity className="google-auth"></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SignUp