import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'mobx-react'
import DataStore from 'Stores/data'
import NotificationStore from 'Stores/notification'
import AppRoute from './app-route'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={DataStore} notification={NotificationStore}>
      <AppContainer>
        <AppRoute/>
      </AppContainer>
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
)


// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
