import currentEnv from "../env/get-current-env";
import services from "../services/api/services";
import log from "./log";

export default function baseUrl(service) {
  // import ipAdress from "../../functions/get-environment-ip";

  let baseUrl;
  let baseUrlGlobal;
  let baseUrlLocalhost;

  switch (service) {
    case services.RokysoftBackend:
      baseUrlGlobal = "https://rokysoft.com/api";
      baseUrlLocalhost = "http://localhost:4010/api";
      // baseUrlLocalhost = 'http://10.0.2.2:4010/api';
      if (currentEnv === "development") baseUrl = baseUrlLocalhost;
      else baseUrl = baseUrlGlobal;
    //   baseUrl = baseUrlGlobal;
      break;
    // case services.RokysoftMedia:
    //     baseUrlGlobal = 'https://media.rokysoft.com/api';
    //     // baseUrlLocalhost = 'http://localhost:4001/api';
    //     // baseUrlLocalhost = 'http://10.0.2.2:4001/api';
    //     if (currentEnv === 'development') baseUrl = baseUrlLocalhost;
    //     else baseUrl = baseUrlGlobal;
    //     // baseUrl = baseUrlGlobal;
    //     break;
    default:
      break;
  }

  log("Current env:", currentEnv);
  log("Base url:", baseUrl);

  return baseUrl;
}
