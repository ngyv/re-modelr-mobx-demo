#### Setup

1. `git clone git@github.com:ngyv/re-modelr-mobx-demo.git`
2. `npm install`
3. `npm run server`
4. `npm start`
5. Go to [localhost:8888/re-modelr-mobx-demo](http://localhost:8888/re-modelr-mobx-demo)

#### Using [re-modelr](https://github.com/ngyv/re-modelr)

[Using HOC and mobx](https://github.com/ngyv/re-modelr-mobx-demo/blob/master/src/modules/container-concerns.jsx)

I prefer to create a separate files for each model and store and extend from `base-model` and `domain-store` respectively.

[Decorating models attributes as observables](https://github.com/ngyv/re-modelr-mobx-demo/blob/master/src/stores/models.js)

[Decorating store entries as observables and entriesArray as computed](https://github.com/ngyv/re-modelr-mobx-demo/blob/master/src/stores/data.js)

This is an [alternative way](https://github.com/ngyv/re-modelr-mobx-demo/commit/e8f5d165e62dc2b5be4c65f3fc418d9ab0b82d44#diff-9df32e3f61381a18fcee2401497fe146) to using `re-modelr` the quick and dirty(-ish) way.
