import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icons from 'react-native-ionicons'

const home = "Home"
const alerts = "Alerts"
const createlist = "Create"
const profile = "Profile"

const tab = createBottomTabNavigator()

export default function Navigation () {

    return (
        <NavigationContainer>
            <tab.Navigator
            initialRouteName={home}>
                <tab.Screen
            </tab.Navigator>
        </NavigationContainer>
    )
}