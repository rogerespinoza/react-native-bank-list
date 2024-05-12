import React from 'react';
import { LogBox } from 'react-native';

import { HomeNavigation } from './src/navigation';
import { ProductsContextProvider } from './src/contexts';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state. Check:',
]);

function App(): React.JSX.Element {
  return (
    <ProductsContextProvider>
      <HomeNavigation />
    </ProductsContextProvider>
  );
}
export default App;
