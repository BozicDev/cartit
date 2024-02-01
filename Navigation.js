import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icons from 'react-native-ionicons'
import { Home, Alerts, CreateList, Profile } from './Screens'
import Icon from 'react-native-ionicons'


const tab = createBottomTabNavigator()

export default function Navigation() {

    return (
        <NavigationContainer>
            <tab.Navigator
                initialRouteName={Home}
                screenOptions={{ headerShown: false }}
            >

                <tab.Screen name='Home' component={Home} options={{ tabBarIcon: () => { <Icon name='Person' size={20} /> } }} />
                <tab.Screen name='Create List' component={CreateList} />
                <tab.Screen name='Alerts' component={Alerts} />
                <tab.Screen name='Profile' component={Profile} />
            </tab.Navigator>
        </NavigationContainer>
    )

}