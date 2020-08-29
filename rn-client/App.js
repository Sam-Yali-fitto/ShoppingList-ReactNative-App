import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/ShoppingListContext';

const Stack = createStackNavigator();

function NavStack() {
  return (
     <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#87CEFA',
          },

          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}
        initialRouteName="Index"
      >
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={{ title: 'Home' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider>
        <NavigationContainer>
          <NavStack />
        </NavigationContainer>
    </Provider>

  );
}

console.disableYellowBox = true;
