
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ImageBackground } from 'react-native';
import Imagepath2 from './Imagepath2';

class Crypto extends Component {
    constructor() {

        super()


        this.state = {

            arrData: [{ image: Imagepath2.bitcoin, title1: "BITCOIN", market: Imagepath2.up, price: "1.12%" },
            { image: Imagepath2.neo, title1: "NEO", market: Imagepath2.down, price2: "0.12%" },
            { image: Imagepath2.monero, title1: "MONERO", market: Imagepath2.up, price: "5.12%" },
            { image: Imagepath2.ripple, title1: "RIPPLE", market: Imagepath2.down, price2: "1.12%" },
            { image: Imagepath2.peercoin, title1: "PEERCOIN", market: Imagepath2.up, price: "1.12%" },
            { image: Imagepath2.stellar, title1: "STELLAR", market: Imagepath2.up, price: "1.00%" },
            { image: Imagepath2.etherum, title1: "ETHERUM", market: Imagepath2.up, price: "1.12%" },
            { image: Imagepath2.dash, title1: "DASH", market: Imagepath2.down, price2: "3.14%" },
            { image: Imagepath2.litecoin, title1: "LITECOIN", market: Imagepath2.up, price: "2.14%" },
            { image: Imagepath2.dogecoin, title1: "DOGECOIN", market: Imagepath2.up, price: "0.12%" }
            ]

        }
    }

    FlatListItemSeparator = () => {

        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: 'lightgray',
                    marginTop:2,
                }}
            />
        );


    }

    render() {
        return (
            <View style={{flex:1}}>
                <FlatList
                    data={this.state.arrData}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({ item }) =>

                        <View style={styles.container}>
                            <View style={{ flex: 1 }} >
                                <Image source={item.image} style={styles.images} />
                            </View>


                            <View style={{ flex: 2}}>
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

export default Crypto;

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
