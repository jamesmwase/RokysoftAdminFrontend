import log from "../log";

async function base64ToBlob(base64) {
    log('Converting base 64 to blob..');
    let base64Res = await fetch(base64);
    let blob = await base64Res.blob();
    return blob;
}

export default base64ToBlob;