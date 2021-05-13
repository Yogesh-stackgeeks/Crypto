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


                            <View style={{ flex: 3.5 }}>
                                <TouchableOpacity>
                                    <Text style={styles.texts}>{item.title1}</Text>

                                </TouchableOpacity>
                                <Image source={item.market} style={styles.marketcss} />
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
        bottom: 25
    },
    prices2: {
        left: 210,
        bottom: 47,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red'
    }



});