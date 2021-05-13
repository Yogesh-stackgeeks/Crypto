import 'react-native-gesture-handler';
import * as React from 'react';
import { TouchableOpacity,Image,Button, View, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home'

function HomePage({ navigation }) {
  const image = { uri: "https://www.mordeo.org/files/uploads/2021/01/Bitcoin-Cryptocurrency-Dark-Background-4K-Ultra-HD-Mobile-Wallpaper-scaled.jpg" };
  return (

    <View style={{ flex: 1 }}>
      <ImageBackground source={image} style={styles.image}>
        <View style={{ flex:1, 
          flexDirection: "column",
          justifyContent:"flex-end",
          alignSelf:'center' 
        }}>
         
        <TouchableOpacity  onPress={() => navigation.navigate('CryptoCurruncy')}>
        <Image source = {require('./Images/go.png')} style={styles.images}/>
        </TouchableOpacity></View>
      </ImageBackground>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} options={{headerShown:false}}/>
        <Stack.Screen name="CryptoCurruncy" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  images: {
    height: 50,
    width: 50,  
    borderRadius:50,
    backgroundColor:"white",
    marginBottom:30
},

})

 