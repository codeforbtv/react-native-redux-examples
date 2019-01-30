import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';
import gingerKitten from './assets/gingerkitten.jpg';

export default class App extends React.Component {


    state = {kittenClicks: 0};

    incrementCounter = () => {
        this.setState({kittenClicks: this.state.kittenClicks + 1})
    };


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Kitten Clicker</Text>
                <TouchableHighlight onPress={this.incrementCounter} style={styles.kitten}>
                    <Image
                        style={styles.button}
                        source={gingerKitten}
                    />

                </TouchableHighlight>
                <Text style={[styles.countText]}>
                    {this.state.kittenClicks}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {fontSize: 20, marginBottom: 20},
    button: {
        height: 100,
        width: 150
    },
    countText:{marginTop: 20, fontSize: 20}
});
