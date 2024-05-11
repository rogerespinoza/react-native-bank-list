import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../views';
import { homeRoutes } from './routes';

const Stack = createStackNavigator();

export function HomeNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={homeRoutes.productList}>
        <Stack.Screen name={homeRoutes.productList} component={HomeScreen} />
        <Stack.Screen name={homeRoutes.productDetail} component={HomeScreen} />
        <Stack.Screen name={homeRoutes.addProduct} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
