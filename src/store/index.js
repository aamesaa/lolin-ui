import config from '../config'
import axios from 'axios'

function getDataViaApi(path, cb) {
  axios.get(config.getApiPath(path))
    .then((response) => {
      cb(response)
    })
    .catch((error) => {
      errorHandler(error)
    })
}

function putDataViaApi(path, cb, {data}) {
  axios.put(config.getApiPath(path), data)
    .then((response) => {
      cb(response);
      successHandler(response);
    })
    .catch((error) => {
      errorHandler(error)
    })
}

function postDataViaApi(path, cb, {data}, success) {
  axios.post(config.getApiPath(path), data)
    .then((response) => {
      cb(response);
      if (success === undefined) {
        successHandler(response);
      }
    })
    .catch((error) => {
      errorHandler(error)
    })
}
