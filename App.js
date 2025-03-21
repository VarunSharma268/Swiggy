import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screen/HomeScreen';
import StackNavigator from './StackNavigator';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
   <>
   <Provider store={store}>
     <StackNavigator/>
   </Provider>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

   
  },
});
