import baseUrl from "../../functions/base-url";
import services from "./services";

let RokysoftBackend = {
    baseUrl: baseUrl(services.RokysoftBackend),
    portfolio: {
        add: baseUrl(services.RokysoftBackend) + '/portfolio/add',
        read: baseUrl(services.RokysoftBackend) + '/portfolio/read',
        update: baseUrl(services.RokysoftBackend) + '/portfolio/update',
    },
}

export default RokysoftBackend;