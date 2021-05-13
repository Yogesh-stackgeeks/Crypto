import * as React from 'react';
import { Button, View,ImageBackground, StyleSheet , TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home'

function HomePage({ navigation }) {
  const image = { uri:"https://www.mordeo.org/files/uploads/2021/01/Bitcoin-Cryptocurrency-Dark-Background-4K-Ultra-HD-Mobile-Wallpaper-scaled.jpg" };
  return (
    
    <View style={{ flex: 1}}>
     <ImageBackground source= {image} style={styles.image}>
     <View style = {{flex:1, flexDirection:"column-reverse"}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home2')}>
        <Text style = {{color : 'red'}}>Go</Text>
</TouchableOpacity>
      </View>
       </ImageBackground>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Home2" component={Home} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }})
