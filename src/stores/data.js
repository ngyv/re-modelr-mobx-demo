import Models from 'Stores/models'
import reModelr from '@ngyv/re-modelr'
const { DomainStore } = reModelr
import { decorate, observable, computed } from 'mobx'

function store(modelClasses) {
  decorate(DomainStore, {
    entries: observable,
    entriesArray: computed,
  })

  return Object.keys(modelClasses).reduce((store, modelClassName) => {
    const modelName = modelClassName.replace('Model', '');
    store[`${modelName}Store`] = new DomainStore(modelClasses[modelClassName], { basePath: 'https://my-json-server.typicode.com/ngyv/re-modelr-mobx-demo', modelName: modelName.toLowerCase() });
    return store;
  }, {});
}

const Store = store(Models);
export default Store;
