import typeofs from "../../global/typeofs";
import log from "../log";
import readFromStorage from "../storage/read-from-storage";
import storageKeys from "../storage/storage-keys";
import writeToStorage from "../storage/write-to-storage";
export default async function getIp() {
    log('Obtaining user ip from network..');
    let ip = readFromStorage(storageKeys.network.ip, typeofs.string);

    if (ip && ip !== null) return ip;
    if (window.getIp)
        window.getIPs().then((res) => {
            let ip = res.join('\n');
            log('ip:', ip);
            writeToStorage.custom(storageKeys.network.ip, ip);
        });
}