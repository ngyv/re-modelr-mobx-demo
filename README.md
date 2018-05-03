#### Setup

1. `git clone git@github.com:ngyv/re-modelr-mobx-demo.git`
2. `npm install`
3. `npm run server`
4. `npm start`
5. Go to [localhost:8888/demo](http://localhost:8888/demo)

#### Using [re-modelr](https://github.com/ngyv/re-modelr)

[Using HOC and mobx](https://github.com/ngyv/re-modelr-mobx-demo/blob/master/src/modules/container-concerns.jsx)

I prefer to create a separate files for each model and store and extend from `base-model` and `domain-store` respectively.

This is an alternative way to using `re-modelr` the quick and dirty(-ish) way.

[Decorating models attributes as observables](https://github.com/ngyv/re-modelr-mobx-demo/blob/master/src/stores/models.js)

[Decorating store entries as observables and entriesArray as computed](https://github.com/ngyv/re-modelr-mobx-demo/blob/master/src/stores/data.js)
