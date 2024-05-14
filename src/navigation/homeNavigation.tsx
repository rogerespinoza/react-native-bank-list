import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  AddProductScreen,
  EditProductScreen,
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
          options={{ title: 'BANCO' }}
        />
        <Stack.Screen
          name={homeRoutes.productDetail}
          component={ProductDetailScreen}
          initialParams={{}}
          options={{ title: 'BANCO' }}
        />
        <Stack.Screen
          name={homeRoutes.addProduct}
          component={AddProductScreen}
          options={{ title: 'BANCO' }}
        />
        <Stack.Screen
          name={homeRoutes.editProduct}
          component={EditProductScreen}
          options={{ title: 'BANCO' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
