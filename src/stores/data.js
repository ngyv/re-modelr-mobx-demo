import Models from 'Stores/models'
import { DomainStore } from '@ngyv/re-modelr'
import { decorate, observable, computed } from 'mobx'

class DStore extends DomainStore {
  _fetchAll(params) {
    return this._api.get(params, {}, 'include')
  }
  _fetchOne(params) {
    return this._api.get(params, {}, 'include')
  }
}
function store(modelClasses) {
  decorate(DomainStore, {
    entries: observable,
    entriesArray: computed,
  })

  return Object.keys(modelClasses).reduce((store, modelClassName) => {
    const modelName = modelClassName.replace('Model', '');
    store[`${modelName}Store`] = new DStore(modelClasses[modelClassName], { basePath: 'https://my-json-server.typicode.com/ngyv/re-modelr-mobx-demo', modelName: modelName.toLowerCase() });
    return store;
  }, {});
}

const Store = store(Models);
export default Store;
