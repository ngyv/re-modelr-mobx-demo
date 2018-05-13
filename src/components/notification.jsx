import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('notification')
@observer
export default class Post extends Component {

  render() {
    return (
      <div className="notification">
        {this.props.notification.message}
      </div>
    )
  }
}
