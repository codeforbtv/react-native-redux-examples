import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';
import gingerKitten from './assets/gingerkitten.jpg';
import {Audio} from 'expo';
import screamSound from './assets/scream.mp3';
import purrSound from './assets/purr.mp3';

const oddsOfSuccess = 0.5;
const tryCuddle = () => (Math.random() >= oddsOfSuccess);




export default class App extends React.Component {


    state = {cuddleCount: 0, scratches: 0};


    attemptToCuddle = async () => {
        const success = tryCuddle();
        const soundObject = new Audio.Sound();
        try {
           if(success){
               // Purr
               await soundObject.loadAsync(purrSound);
               await soundObject.playAsync();
           } else {
               // Scratch
               await soundObject.loadAsync(screamSound);
               await soundObject.playAsync();
           }
        } catch (e) {
            console.log(e);
        }
        const newState = success ? {cuddleCount: this.state.cuddleCount + 1} : {scratches: this.state.scratches + 1};
        this.setState(newState)
    };


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Kitten Roulette</Text>
                <Text style={styles.subHeader}>Are you brave enough to pet</Text>
                <Text style={styles.subHeader}>Kuss the kitten?</Text>
                <TouchableHighlight onPress={this.attemptToCuddle} style={styles.kitten}>
                    <Image
                        style={styles.button}
                        source={gingerKitten}
                    />
                </TouchableHighlight>
                <View style={styles.resultsBox}>
                    <View>
                        <Text style={[styles.countText]}>
                            Cuddles
                        </Text>
                        <Text style={[styles.countText]}>
                            {this.state.cuddleCount}
                        </Text>
                    </View>
                    <View>
                        <Text style={[styles.countText]}>
                            Scratches
                        </Text>
                        <Text style={[styles.countText]}>
                            {this.state.scratches}
                        </Text>
                    </View>
                </View>
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
    subHeader: {fontSize: 20, marginBottom: 40},
    button: {
        height: 100,
        width: 150
    },
    countText: {marginTop: 20, fontSize: 20},
    resultsBox: {flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}
});
