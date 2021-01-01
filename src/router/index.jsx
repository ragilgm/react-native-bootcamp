import React from 'react'
import {AddContact, HomeScreen,Detail,EditContact} from '../pages'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

const Router = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
         <Stack.Screen name="AddContact" component={AddContact} />
         <Stack.Screen name="EditContact" component={EditContact} />
         <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
   )
}

export default Router
