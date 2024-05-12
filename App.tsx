import React from 'react';
import { HomeNavigation } from './src/navigation';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state. Check:',
]);

function App(): React.JSX.Element {
  return <HomeNavigation />;
}
export default App;
