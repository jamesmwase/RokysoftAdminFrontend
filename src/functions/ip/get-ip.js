// import axios from "axios";
// import typeofs from "../../global/typeofs";
// import consolog from "../consolog";
// import readFromStorage from "../storage/read-from-storage";
// import storageKeys from "../storage/storage-keys";

// export default async function getIp() {
//     let apiKey = 'ccfd1335a9594e9bcec213221ae8799d66fd210b6c473da34dd634fe';
//     let url = 'https://api.ipdata.co/?api-key=' + apiKey;

//     let lastIp = readFromStorage(storageKeys.ip, typeofs.string);

//     let currentIp;
//     let res;

//     if (currentIp === lastIp) return // abort;

//     try {
//         res = await axios.get(url);
//     } catch (error) {
//         consolog.error(error);
//     }

//     if (res.data && typeof res.data !== 'string') {
//         currentIp = res.ip;
//     }

//     return currentIp;
// }