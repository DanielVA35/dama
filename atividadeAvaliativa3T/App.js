import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Menu from './src/screens/Menu'
import Versão01 from './src/screens/Versão01'
import Versão02 from './src/screens/Versão02'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="Versão 01" component={Versão01}/>
        <Stack.Screen name="Versão 02" component={Versão02}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}