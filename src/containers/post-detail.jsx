import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import Post from 'Components/post'
import { Link } from 'react-router-dom'

@observer
export default class PostDetail extends Component {
  static propTypes = {
    Post: PropTypes.object.isRequired,
  }

  @computed get post() {
    return this.props.Post.id ? this.props.Post : { id: 0 }
  }
  render() {
    return (
      <div className="post-detail">
        <Link to="/re-modelr-mobx-demo">Back</Link>
        <h2>Post detail</h2>
        <Post post={this.post}/>
      </div>
    )
  }
}
