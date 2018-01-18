import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './component/LoginForm';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyA_h7VA1yN-J2FzRnoMowDbGsKVGdpd4P4',
            authDomain: 'manager-5ae12.firebaseapp.com',
            databaseURL: 'https://manager-5ae12.firebaseio.com',
            projectId: 'manager-5ae12',
            storageBucket: '',
            messagingSenderId: '847439482853'
        };
        firebase.initializeApp(config);
    }


    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
