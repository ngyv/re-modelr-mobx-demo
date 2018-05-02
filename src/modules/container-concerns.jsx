import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { getParams } from 'utils'

@inject('store')
@observer
export function fetchEntries(modelNames) {
  return (Component: Object) => {
    class ContainerStore extends React.Component {
      static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        modelNames:  PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.array,
        ]),
      }

      constructor(props){
      	super(props)

        // stub
        this.modelNamesArray = modelNames.toString().split(',')
      	this.state = this.modelNamesArray.reduce((state, modelName, i) => {
          state[`${modelName}`] = (i === 0 && props.match.params.id) ? {} : []
          return state
        }, {})
      }

      // Checks the stores and tries to match with `modelNames` specified in route
      async _fetchEntriesForRoute() {
        if (!this.modelNamesArray.length) { return }

        const promises = await this.modelNamesArray.reduce((promises, modelName, i) => {
          const modelId = (i === 0) ? this.props.match.params.id : undefined  // only for first `modelName`
          const params = getParams(location.search)
          const store = this.props.store[`${modelName}Store`]

          if (modelId) {
              promises.push(store.findOrShowEntry(parseInt(modelId), params))
          } else {
              promises.push(store.listEntries(params).then((_entries) => Promise.resolve(store.entriesArray())))
          }

          return promises
        }, [])

        this.entries = await Promise.all(promises).then((allEntries) => allEntries.reduce((all, entries, i) => {
          const modelName = this.modelNamesArray[i]
          all[`${modelName}`] = entries
          return all
        }, {}))

        this._spreadEntriesForComponent(this.entries)
      }

      _spreadEntriesForComponent(entriesHash) {
        let computedEntriesHash = {}
        const modelNames = Object.keys(entriesHash)

        modelNames.forEach((modelName) => {
          const entries = entriesHash[`${modelName}`]
          computedEntriesHash = Object.assign(computedEntriesHash, { get [`${modelName}`]() { return entries || [] } })
        })

        this.setState({ ...computedEntriesHash })
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
