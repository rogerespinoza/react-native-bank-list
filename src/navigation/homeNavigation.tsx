import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  AddProductScreen,
  ProductDetailScreen,
  ProductListScreen,
} from '../views';
import { homeRoutes } from './routes';

const Stack = createStackNavigator();

export function HomeNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={homeRoutes.productList}>
        <Stack.Screen
          name={homeRoutes.productList}
          component={ProductListScreen}
          initialParams={{}}
        />
        <Stack.Screen
          name={homeRoutes.productDetail}
          component={ProductDetailScreen}
          initialParams={{}}
        />
        <Stack.Screen
          name={homeRoutes.addProduct}
          component={AddProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
