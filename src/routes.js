import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Main from './Components/Main'
import Mexican from './Components/Mexican'
import German from './Components/German'
import Food from './Components/Food'


export default (
    <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/mexican' component={Mexican} />
        <Route path='/german' component={German} />
        <Route path='/food/:id' component={Food} />
    </Switch>
)