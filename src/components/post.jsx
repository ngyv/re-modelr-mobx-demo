import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observable } from 'mobx'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
export default class Post extends Component {

  static propTypes = {
    post: PropTypes.object.isRequired,
  }
  @observable userName = ''

  async componentWillReceiveProps(nextProps) {
    if (!nextProps.post.userId) { return }

    const { UserStore } = this.props.store
    const user = await UserStore.findOrShowEntry(parseInt(nextProps.post.userId))
    this.userName = user.name
  }

  render() {
    const { post } = this.props;
    return (
      <div className="post">
        <div className="post__title">{post.title}</div>
        {this.userName &&
          <div className="post_user">by {this.userName}</div>}
      </div>
    )
  }
}
