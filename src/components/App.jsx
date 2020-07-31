import React, { Component } from 'react';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';
import Signup from './auth/Signup';
import Feature from './Feature';
import Signout from './auth/Signout';
import Signin from './auth/Signin';


class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={Welcome} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/feature' component={Feature} />
                    <Route path='/signout' component={Signout} />
                    <Route path='/signin' component={Signin} />
                </Switch>
            </div>
        );
    }
}
export default App;
 