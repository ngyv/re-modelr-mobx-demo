import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'

@observer
export default class Home extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  }

  @computed get posts() {
    return this.props.store.PostStore.entriesArray
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
