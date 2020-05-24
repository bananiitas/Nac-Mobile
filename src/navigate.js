import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './components/Home'
import Search from './components/Search'
import UserID from './components/UserID'
import UserList from './components/AllUsers'

const Stack = createStackNavigator();

export default function Navigate(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home Page" component={Home} />
                <Stack.Screen name="Search User" component={Search} />
                <Stack.Screen name="Single User" component={UserID} />
                <Stack.Screen name="List" component={UserList} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}