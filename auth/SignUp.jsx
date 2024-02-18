import { View, Text, TextInput, SafeAreaView } from 'react-native'
import React from 'react'

const SignUp = () => {
  return (
    <SafeAreaView className="pt-10">
        <View className=" flex-1 justify-center items-center">
            <View className="email-group">
                <Text> E-Mail</Text>
            </View>
        </View>
        <View>
            <View className="password-group">

            </View>
        </View>
        <View className="auth-group">

        </View>
        <View className="other-signin-methods">

        </View>
    </SafeAreaView>
  )
}

export default SignUp