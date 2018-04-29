const getParams = function(locationSearch = '') {
  locationSearch = locationSearch.replace('?', '')
  if (locationSearch === '') { return {} }

  return locationSearch.split('&').reduce((params, keyValue) => {
    keyValue = keyValue.split('=')
    if (keyValue.length === 2) {
      params[keyValue[0]] = keyValue[1]
    }
    return params
  }, {})
}

export {
  getParams
}
