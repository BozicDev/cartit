import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Alerts, CreateList, Profile } from './Screens'
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons'


const Tab = createBottomTabNavigator()

export default function Navigation() {

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={Home}
                screenOptions={{ headerShown: false, tabBarActiveTintColor: "black"}}>

                <Tab.Screen 
                 name='Home' 
                 component={Home} 
                 options={{ tabBarIcon: () => <Ionicons name='home-outline' size={20} /> }} />

                <Tab.Screen 
                 name='Create List' 
                 component={CreateList} 
                 options={{ tabBarIcon: () => <Ionicons name="add-circle-outline" size={20} /> }} />

                <Tab.Screen 
                 name='Alerts' 
                 component={Alerts} 
                 options={{ tabBarIcon: () => <Ionicons name="notifications-outline" size={20} /> }} />

                <Tab.Screen 
                 name='Profile' 
                 component={Profile} 
                 options={{ tabBarIcon: () => <AntDesign name='user' size={20} /> }} />
                
            </Tab.Navigator>
        </NavigationContainer>
    )

}