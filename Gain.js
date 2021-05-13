import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ImageBackground } from 'react-native';
import Imagepath2 from './Imagepath2';

class Gain extends Component {
    constructor() {

        super()


        this.state = {

            arrData: [{ image: Imagepath2.dogecoin, title1: "BITCOIN", market: Imagepath2.up, price: "1.12%" },
            { image: Imagepath2.monero, title1: "MONERO", market: Imagepath2.up, price: "5.12%" },
            { image: Imagepath2.peercoin, title1: "PEERCOIN", market: Imagepath2.up, price: "1.12%" },
            { image: Imagepath2.stellar, title1: "STELLAR", market: Imagepath2.up, price: "1.85%" },
            { image: Imagepath2.etherum, title1: "ETHERUM", market: Imagepath2.up, price: "1.12%" },
            { image: Imagepath2.litecoin, title1: "LITECOIN", market: Imagepath2.up, price: "2.14%" },
            { image: Imagepath2.dogecoin, title1: "DOGECOIN", market: Imagepath2.up, price: "0.12%" }
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


                            <View style={{ flex: 3.5 }}>
                                <TouchableOpacity>
                                    <Text style={styles.texts}>{item.title1}</Text>

                                </TouchableOpacity>
                                <Image source={item.market} style={styles.marketcss} />
                                <Text style={styles.prices}>{item.price}</Text>
                                <Text style={styles.prices2}>{item.price2}</Text>


                            </View>
                        </View>

                    } />
            </View>
        )
    }
}


export default Gain;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    images: {
        height: 40,
        width: 40,
        marginLeft: 20,

    },
    texts: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingRight: 100
    },

    marketcss: {
        height: 18,
        width: 18,
        left: 180,
        bottom: 28
    },
    prices: {
        left: 210,
        bottom: 49,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green'}
    });
    
