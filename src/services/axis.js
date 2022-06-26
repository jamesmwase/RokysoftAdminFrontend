import axios from 'axios';
// import ErrorDialog from '../components/dialogs/error-dialog';
import consolog from '../functions/consolog';
import log from '../functions/log';
import apiParams from '../functions/security/secure-params';

export default async function axis(params) {
  log('current params:', params);
  let apiLink = params.apiLink;
  let httpMethod = params.httpMethod;
  let logMsg = params.logMsg;
  let credentialsRequired = params.credentialsRequired;
  let headers = params.headers;

  let config = {
    headers: headers
  }

  if (logMsg) log(logMsg);

  let res;

  try {
    if (httpMethod === 'post') {
      let _secureParams = await apiParams(params);
      if (!_secureParams.userId && !_secureParams.token && credentialsRequired === true) {
        return // abort
      }
      res = await axios.post(apiLink, _secureParams, config);
    } else {
      let _secureParams = await apiParams(params, httpMethod);
      if (!_secureParams.userId && !_secureParams.token && credentialsRequired === true) {
        return // abort
      }
      res = await axios.get(apiLink, await apiParams(params), config);
    }
  } catch (error) {
    consolog.error(error)
  }

  if (!res || res.status === 500) {
    // ErrorDialog('Error(s) Occured: Please try again later.');
    return;
  }
  if (res) {
    if (res.data) {
      if (res.data.errors) {
        let errors = res.data.errors;
        let errorMsgs = [];
        let i;
        for (i = 0; i < errors.length; i++) {
          log(i);
          errorMsgs.push('<p>' + errors[i] + '</p>');
          log(errorMsgs);
          if (i === errors.length - 1) {
            res.errors = errorMsgs;
            // return ErrorDialog(errorMsgs);
            // return res;
          }
        }
      } else {
        log('server response:', res.data);
        if (typeof res.data === 'string') return;
        return res.data;
      }
    }
  }
}