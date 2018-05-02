import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'

@observer
export default class Home extends Component {
  static propTypes = {
    Post: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div className="homepage">
        <h2>Posts</h2>
        <div>
          {this.props.Post.map((post, i) => {
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
