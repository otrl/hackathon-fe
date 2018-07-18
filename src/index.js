import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux'

import {store, history} from './store';

import NoMatch from './components/pages/NoMatch';
import HomePage from './components/pages/Home';

import './styles/main.scss';

function Index () {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route component={NoMatch}/>
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
}

ReactDOM.render(<Index/>, document.getElementById('root'));
