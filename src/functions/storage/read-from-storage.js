import typeofs from "../../global/typeofs";
import log from "../log";

export default function readFromStorage(key, _typeof) {
    log('Reading item from storage..');
    log('Typeof:', _typeof);
    let value = localStorage.getItem(key);

    log(value);

    if (value != null) {
        switch (_typeof) {
            case typeofs.boolean:
                if (value === 'true') value = true;
                else if (value === 'false') value = false;
                break;
            case typeofs.int:
                value = parseInt(value, 10);
                break;
            case typeofs.double:
                value = parseFloat(value);
                break;
            case typeofs.object:
                // convert string to object
                value = JSON.parse(value);
                break;
            default:
                break;
        }
    } else value = undefined;
    log(value);
    return value;
}