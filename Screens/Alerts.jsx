import { View, Text } from 'react-native'
import React from 'react'

const Alerts = (navigation) => {
  return (
    <View>
      <Text onPress={() => {alert("Alerts Screen")}}>Alerts</Text>
    </View>
  )
}

export default Alerts