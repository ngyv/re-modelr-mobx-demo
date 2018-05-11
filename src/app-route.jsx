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
        <Route exact path='/re-modelr-mobx-demo' component={fetchEntries(['Post', 'User'])(Home)}/>
        <Route exact path='/re-modelr-mobx-demo/posts/:id' component={fetchEntries('Post')(PostDetail)}/>
      </Switch>
    )
  }
}
