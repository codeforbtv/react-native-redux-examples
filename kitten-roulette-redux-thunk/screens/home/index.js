import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from './actions';

import {StyleSheet, Text, Platform, View, TouchableHighlight, Image} from 'react-native';
import gingerKitten from '../../assets/gingerkitten.jpg';
import {Audio} from 'expo';
import screamSound from '../../assets/scream.mp3';
import purrSound from '../../assets/purr.mp3';


class Home extends React.Component {

    static getDerivedStateFromProps(props, state) {
        const soundObject = new Audio.Sound();
        const didPurr = props.cuddles > state.cuddles;
        const didScratch = props.scratches > state.scratches;

        (async function (purred, scratched) {

            try {
                if (didPurr) {
                    // Purr
                    await soundObject.loadAsync(purrSound);
                    await soundObject.playAsync();
                }
                if (didScratch) {
                    // Scratch
                    await soundObject.loadAsync(screamSound);
                    await soundObject.playAsync();
                }
            } catch (e) {
                console.log(e);
            }
        })(didPurr, didScratch);

        return props;
    };

    state = {cuddles: 0, scratches: 0};

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headers}>
                    <Text style={styles.header}>Kitten Roulette</Text>
                    <Text style={styles.subHeader}>Are you brave enough to pet</Text>
                    <Text style={styles.kuss}>Kuss the kitten?</Text>
                </View>
                <TouchableHighlight onPress={this.props.actions.attemptToCuddle} style={styles.kitten}>
                    <Image
                        style={styles.button}
                        source={gingerKitten}
                    />
                </TouchableHighlight>
                <View style={styles.resultsWrapper}>
                    <View style={styles.resultsBox}>
                        <View>
                            <Text style={[styles.countText]}>
                                Cuddles
                            </Text>
                            <Text style={[styles.countText]}>
                                {this.props.cuddles}
                            </Text>
                        </View>
                        <View>
                            <Text style={[styles.countText]}>
                                Scratches
                            </Text>
                            <Text style={[styles.countText]}>
                                {this.props.scratches}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

}

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
        width: 300,
    },
    kitten: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    countText: {fontSize: 20, textAlign: 'center', marginLeft: 10, marginRight: 10},
    resultsWrapper: {height: 140},
    resultsBox: {flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}
});

const mapStateToProps = (state) => ({cuddles: state.home.cuddles, scratches: state.home.scratches});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);