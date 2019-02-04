import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/';
import Home from './screens/home';


const store = createStore(reducer);

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Home/>
            </Provider>
        );
    }
}


