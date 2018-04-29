import React, { Component } from 'react'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import Post from 'Components/post'
import { Link } from 'react-router-dom'

@observer
export default class PostDetail extends Component {
  @computed get post() {
    return this.props.entry || { id: 0 };
  }
  render() {
    return (
      <div className="post-detail">
        <Link to="/demo">Back</Link>
        <h2>Post detail</h2>
        <Post post={this.post}/>
      </div>
    )
  }
}
