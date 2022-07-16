import { getFileExtensions } from "mime-file-extension";

export default async function fileExtension(mimetype) {
    log('Getting file extension..');
    let extension;

   extension = getFileExtensions(mimetype, true);
   
   return extension;
}