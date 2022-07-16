import S from 'string';
import generateRandomString from '../generate-random-string';

export default async function generateUrl(text) {
    console.log('Generating url friendly text..');
    let underscored = S(text).underscore().s + '_' + await generateRandomString(5);
    console.log('url:', underscored);
    return escape(underscored);
}