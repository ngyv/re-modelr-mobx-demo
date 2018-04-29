import reModelr from '@ngyv/re-modelr'
const { DomainStore, BaseModel } = reModelr
import { types } from '@ngyv/prop-utils'
import { decorate, observable } from 'mobx'

const MODELS = {
  Post: {
    id: types.number,
    title: types.string,
    userId: types.number,
  },
  Comment: {
    id: types.number,
    body: types.string,
    name: types.string,
    postId: types.number,
  },
  User: {
    id: types.number,
    name: types.string,
  },
};


function extendWithAttributes(attributes = {}) {
  let cloneModel = Object.create(null);
  Object.getOwnPropertyNames(BaseModel).forEach((prop) => {
    let descriptor = Object.getOwnPropertyDescriptor(BaseModel, prop);
    Object.defineProperty(cloneModel, prop, descriptor);
  });
  cloneModel.prototype._attributes = function() { return attributes; }
  return Object.freeze(cloneModel.prototype.constructor);
}

function modelClasses(models) {
  return Object.keys(models).reduce((classes, modelName) => {
    classes[`${modelName}Model`] = extendWithAttributes(BaseModel, models[modelName]);
    return classes;
  }, {});
}

function store(modelClasses) {
  decorate(DomainStore, {
    entries: observable,
  });
  return Object.keys(modelClasses).reduce((store, modelClassName) => {
    const modelName = modelClassName.replace('Model', '');
    store[`${modelName}Store`] = new DomainStore(modelClasses[modelClassName], { basePath: 'http://localhost:3001', modelName: modelName.toLowerCase() });
    return store;
  }, {});
}

const Models = modelClasses(MODELS);
const Store = store(Models);

export default Store;
