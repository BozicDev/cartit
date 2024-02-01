import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const Home = (navigation) => {
  return (
    <View>
      <Text onPress={() => {alert("Home Screen")}}>Home</Text>
    </View>
  )
}

export default Home