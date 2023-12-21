import { ActivityIndicator, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font'

import Navigator from './src/navigator/Navigator';

export default function App() {


  const [fontLoaded] = useFonts({
    'WorkSans-Regular': require('./assets/fonts/WorkSans-Regular.ttf'),
    'WorkSans-Bold': require('./assets/fonts/WorkSans-Bold.ttf'),
    'WorkSans-Italic': require('./assets/fonts/WorkSans-Italic.ttf')
  })

  if (!fontLoaded) return <ActivityIndicator />



  return (
    <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
