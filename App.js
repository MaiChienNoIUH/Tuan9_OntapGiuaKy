// import {NavigationContainer} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import screen01 from './screens/screen01.js';
import screen02 from './screens/screen02.js';
import screen03 from './screens/screen03.js';
import AddBikeScreen from './screens/AddBikeScreen.js';
import EditBikeScreen from './screens/EditBikeScreen.js';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName ='Screen 02'>
        <Stack.Screen name='Screen 01' component ={screen01}/>
        <Stack.Screen name='Screen 02' component ={screen02}/>
        <Stack.Screen name='Screen 03' component ={screen03}/>
        <Stack.Screen name='AddBikeScreen' component ={AddBikeScreen}/>
        <Stack.Screen name='EditBikeScreen' component ={EditBikeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
