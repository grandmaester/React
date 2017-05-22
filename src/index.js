import {render} from 'react-dom'
import React from 'react'
import {Router,Route,IndexRoute,browserHistory} from 'react-router'
import Provider from 'react-redux'

import App from './components/App'
import Login from './components/login'
import Home from './components/home'
import Store,{history} from './store'

const router=(
    
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Login}></IndexRoute>
                <Route path="/Home" component={Home}></Route>
            </Route>
    </Router>

)

render(router,document.getElementById("root"));