import typeofs from "../../global/typeofs";
import log from "../log";
import getIp from "../network/get-ip";
import readFromStorage from "../storage/read-from-storage";
import storageKeys from "../storage/storage-keys";

export default async function secureParams(params, requestMethod) {
  log('Securing params..');
  log('Request Method:', requestMethod);

  let user = readFromStorage(storageKeys.user.object, typeofs.object);
  let token;
  let ip = await getIp();
  // let ip = {};

  if (user) {
    token = user.token;
  }

  if (params === null) params = undefined

  if (!params && requestMethod === 'get') params = {
    params: {
      params: {
        
      }
    }
  };

  if (params && requestMethod === 'get') {
    if (!params.params) {
      let params2 = {
        params: {

        }
      }
      params2.params = params;

      params = params2;
    }
  }

  // for FormData() object
  if (typeof params.append === 'function') {
    params.append('token', token);
    params.append('ip', ip);
    if (user !== null && user) {
      params.append('userId', user.id);
      params.append('ip', user.ip);
      params.append('userRole', user.role)
    }
  }
  // for normal params
  else if (params.params !== undefined) {
    params.params.token = token;
    params.params.ip = ip;
    if (user !== null && user) {
      params.params.userRole = user.role;
      if (typeof params.params.userId !== 'number' || params.params.userId === 0) {
        params.params.userId = user.id;
      }
    }
  } else if (params !== undefined) {
    params.token = token;
    params.ip = ip;
    if (user !== null && user) {
      params.userRole = user.role;
      if (typeof params.userId !== 'number' || params.userId === 0) {
        params.userId = user.id;
      }
    }
  }
  // log(params);
  log('params:', params);
  return params;
}