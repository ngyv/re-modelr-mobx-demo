import React, { Component } from 'react'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'

@observer
export default class Home extends Component {
  @computed get posts() {
    return this.props.entry || [];
  }
  render() {
    return (
      <div className="homepage">
        <h2>Posts</h2>
        <div>
          {this.posts.map((post, i) => {
            return (
              <div key={(new Date()).valueOf() + i}>
                <Link to={`/demo/posts/${post.id}`}>{post.title}</Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
