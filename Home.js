import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Crypto from './Crypto';
import Gain from './Gain';
import Lose from'./Lose';

function Screen1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Up!</Text>
    </View>
  );
}

function Screen2() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Up!</Text>
    </View>
  );
}

function Screen3() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Down!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function Home({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Crypto" component={Crypto} />
      <Tab.Screen name="Up" component={Gain} />
      <Tab.Screen name="Down" component={Lose} />
    </Tab.Navigator>
  );
}
