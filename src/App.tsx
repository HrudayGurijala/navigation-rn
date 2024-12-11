import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Home from './screens/Home';
import Details from './screens/Details';

export type RootStackparamList={
  Home : undefined;
  Details : {productId : string}
};

const Stack = createNativeStackNavigator<RootStackparamList>()

function App(): React.JSX.Element {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title:'Trending products'
        }}
        />
        <Stack.Screen
        name='Details'
        component={Details}
        options={{
          title:'Product Details'
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
