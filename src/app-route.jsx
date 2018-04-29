import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { fetchEntries } from 'Modules/container-concerns'
import Home from 'Containers/home'
import PostDetail from 'Containers/post-detail'

import 'Styles/app.scss'

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/demo' component={fetchEntries('Post')(Home)}/>
        <Route exact path='/demo/posts/:id' component={fetchEntries('Post')(PostDetail)}/>
      </Switch>
    )
  }
}