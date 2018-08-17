import {serverAPI} from '../../config'
function parseJSON(response) {
    return response.json();
}
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    throw new Error('Network response was not ok.')
}

export  function postData(url, data) {
    // Default options are marked with *
    return  new Promise((resolve,reject)=>{
        fetch(`${serverAPI}/API${url}`, {
            body: JSON.stringify(data), // must match 'Content-Type' header
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: {
              'content-type': 'application/json'
            },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
          })
          .then(checkStatus)
          .then(parseJSON) // parses response to JSON
          .then(res=>{
            resolve(res)
          })
          .catch(err=>{
            reject(err)
          })
    })

}
export function getData(url) {
    return fetch(url)
    .then(parseJSON) // parses response to JSON
    .then(checkStatus)
}
