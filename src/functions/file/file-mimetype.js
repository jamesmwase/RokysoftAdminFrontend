export default async function fileMimeType(file) {
    log('Getting file mimetype..');
    let mimetype;
    
    if (file) {
        mimetype = file.type
    }

    log('mimetype:', mimetype);

    return mimetype;
}