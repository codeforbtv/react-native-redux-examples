import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';
import gingerKitten from './assets/gingerkitten.jpg';
import {Audio} from 'expo';
import screamSound from './assets/scream.mp3';
import purrSound from './assets/purr.mp3';

const oddsOfSuccess = 0.25;
const tryCuddle = () => (Math.random() >= oddsOfSuccess);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#fff',
        height: '100%'

    },
    headers: {alignItems: 'center'},
    header: {fontSize: 20, marginBottom: 40, marginTop: 20},
    subHeader: {fontSize: 20, marginBottom: 0},
    kuss: {fontSize: 40, marginBottom: 30},
    button: {
        height: 200,
        width: 300
    },
    kitten: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    countText: {fontSize: 20, textAlign: 'center', marginLeft: 10, marginRight: 10},
    resultsWrapper: {height: 140},
    resultsBox: {flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}
});

export default class App extends React.Component {

    state = {cuddleCount: 0, scratches: 0};

    attemptToCuddle = async () => {
        const success = tryCuddle();
        const soundObject = new Audio.Sound();
        try {
            if (success) {
                // Purr
                await soundObject.loadAsync(purrSound);
                await soundObject.playAsync();
            } else {
                // Scratch
                await soundObject.loadAsync(screamSound);
                await soundObject.playAsync();
            }
        } catch (e) {
           // Log error
        }
        const newState = success ? {cuddleCount: this.state.cuddleCount + 1} : {scratches: this.state.scratches + 1};
        this.setState(newState);
    };


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headers}>
                    <Text style={styles.header}>{'Kitten Roulette'}</Text>
                    <Text style={styles.subHeader}>{'Are you brave enough to pet'}</Text>
                    <Text style={styles.kuss}>{'Kuss the kitten?'}</Text>
                </View>
                <TouchableHighlight onPress={this.attemptToCuddle} style={styles.kitten}>
                    <Image
                        source={gingerKitten}
                        style={styles.button}
                    />
                </TouchableHighlight>
                <View style={styles.resultsWrapper}>
                    <View style={styles.resultsBox}>
                        <View>
                            <Text style={[styles.countText]}>
                                {'Cuddles'}
                            </Text>
                            <Text style={[styles.countText]}>
                                {this.state.cuddleCount}
                            </Text>
                        </View>
                        <View>
                            <Text style={[styles.countText]}>
                                {'Scratches'}
                            </Text>
                            <Text style={[styles.countText]}>
                                {this.state.scratches}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}


