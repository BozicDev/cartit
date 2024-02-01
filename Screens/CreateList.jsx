import { View, Text } from 'react-native'
import React from 'react'

const CreateList = (navigation) => {
  return (
    <View>
      <Text onPress={() => {alert("CreateList Screen")}}>CreateList</Text>
    </View>
  )
}

export default CreateList