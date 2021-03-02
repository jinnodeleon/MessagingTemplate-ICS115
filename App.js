import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Login';
import Info from './src/screens/Info';
import Inbox from './src/screens/Inbox';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Inbox" component={Inbox} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
