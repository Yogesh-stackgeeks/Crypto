import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function Screen1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Crypto!</Text>
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
        <Tab.Screen name="Crypto" component={Screen1} />
        <Tab.Screen name="Up" component={Screen2} />
        <Tab.Screen name="Down" component={Screen3} />
      </Tab.Navigator>
  );
}
