import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ImageBackground } from 'react-native';
import Imagepath2 from './Imagepath2';

class Lose extends Component {
    constructor() {

        super()


        this.state = {

            arrData: [
            { image: Imagepath2.neo, title1: "NEO", market: Imagepath2.down, price2: "0.12%" },
            { image: Imagepath2.ripple, title1: "RIPPLE", market: Imagepath2.down, price2: "1.12%" },
            { image: Imagepath2.dash, title1: "DASH", market: Imagepath2.down, price2: "3.14%" },
            { image: Imagepath2.devcoin, title1: "DEVCOIN", market: Imagepath2.down, price2: "9.14%" },
            { image: Imagepath2.steem, title1: "STEEM", market: Imagepath2.down, price2: "12.14%" }
            
            ]

        }
    }

    FlatListItemSeparator = () => {

        return (
            <View
                style={{
                    marginTop: 2,
                    height: 1,
                    width: "100%",
                    backgroundColor: 'lightgray',
                }}
            />
        );

        Home
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.arrData}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({ item }) =>

                        <View style={styles.container}>
                            <View style={{ flex: 1 }} >
                                <Image source={item.image} style={styles.images} />
                            </View>


                            <View style={{ flex: 2 }}>
                                <TouchableOpacity>
                                    <Text style={styles.texts}>{item.title1}</Text>

                                    </TouchableOpacity></View>
                                <View style={{ flex: .7}}> 
                                <Image source={item.market} style={styles.marketcss} /></View>
                                <View style={{flex:.7}}>
                                <Text style={styles.prices}>{item.price}</Text>
                                <Text style={styles.prices2}>{item.price2}</Text>
                                </View>

                        </View>

                    } />
            </View>
        )
    }
}

export default Lose;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent:'center',
        justifyContent:'center',
    },
    images: {
        marginBottom:28,
        top:20,
        height: 50,
        width: 50,
        marginLeft: 20,

    },
    texts: {
        marginBottom:25,
        top:20,
        fontSize: 22,
        fontWeight: 'bold',
        paddingRight: 50
    },

    marketcss: {
        top:30,
        height: 18,
        width: 18,
    },
    prices: {
        top:30,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green'


    },
    prices2: {
        top:8,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red'
    }



});
