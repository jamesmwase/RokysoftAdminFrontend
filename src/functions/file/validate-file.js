import supportedAudioExtensions from "../../data/file/supported-audio-extensions";
import fileExtension from "./file-extension";
import fileMimeType from "./file-mimetype";

async function validateAudioFile(file, extension) {
    log('Validating audio file..');


}

export default async function validateFile(file) {
    log('Validating file..');
    let result = {};
    let errors = [];
    let extension;

    let mimetype = await fileMimeType(file);
    if (mimetype) {
        extension = await fileExtension(mimetype);
    }

    if (extension === supportedAudioExtensions.mp3) {
        return result;
    } else {
        errors.push('Your uploaded song should be in .mp3 format')
    }
}