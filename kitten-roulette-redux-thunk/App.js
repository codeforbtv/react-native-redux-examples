import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/';
import Home from './screens/home';
import thunk from 'redux-thunk';


const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Home/>
            </Provider>
        );
    }
}


