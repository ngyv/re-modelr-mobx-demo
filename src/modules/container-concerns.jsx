import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx'
import { getParams } from 'utils'

@inject('store')
@observer
export function fetchEntries(modelName) {
  return (Component: Object) => {
    class ContainerStore extends React.Component {
      static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        model: PropTypes.string
      }

      // Checks the stores and tries to match with `model` specified in route
      async _fetchEntriesForRoute() {
        if (!modelName) { return }

        // TODO: generalize to accept `model` as an array of string for multiple models
        const modelId = this.props.match.params.id
        const params = getParams(location.search)

        const store = this.props.store[`${modelName}Store`]
        let entry = null

        if (modelId) {
          entry = await store.findOrShowEntry(parseInt(modelId), params)
        } else {
          await store.listEntries(params)
          entry = store.entriesArray()
        }
        this.setState({ entry, modelName })
      }

      componentWillMount() {
        this._fetchEntriesForRoute()
      }

      render () {
        return React.createElement(
          Component,
          { ...this.state, ...this.props }
        )
      }
    }
    return ContainerStore
  }
}
