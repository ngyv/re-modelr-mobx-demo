import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

@inject('store')
export default class Post extends Component {

  static propTypes = {
    post: PropTypes.object.isRequired,
  }

  componentWillMount() {
    if (!this.props.entry) { return }

    const { UserStore } = this.props.store
    UserStore.showEntry(nextProps.entry.userId)
  }

  render() {
    const { post } = this.props;
    return (
      <div className="post">
        <div className="post__title">{post.title}</div>
      </div>
    )
  }
}
