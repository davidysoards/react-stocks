import axios from 'axios';
const resources = {};
function makeRequestCreator() {
  let call;

  return async url => {
    // check if we made a request
    if (call) {
      // cancel the previous request
      call.cancel();
    }
    // create a new CancelToken
    call = axios.CancelToken.source();
    try {
      // do we have this call already
      if (resources[url]) {
        // if yes return cached data
        return resources[url];
      }
      const res = await axios(url, { cancelToken: call.token });
      const result = res.data;
      // store response
      resources[url] = result;
      return result;
    } catch (error) {
      if (axios.isCancel(error)) {
        // handle if request was cancelled
        console.log('Request canceled', error.message);
      } else {
        // handle other errors
        console.log('Something went wrong: ', error);
      }
    }
  };
}

export const get = makeRequestCreator();
