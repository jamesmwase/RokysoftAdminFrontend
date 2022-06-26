import log from "../log";
import readFromStorage from "./read-from-storage";
import storageKeys from "./storage-keys";

let writeToStorage = {
    custom: function (key, value) {
        localStorage.setItem(key, value);

    },
    userData: function (user) {
        // localStorage.setItem(storageKeys.user.fullName, user.fullName);
        // localStorage.setItem(storageKeys.user.dob, user.dob);
        // localStorage.setItem(storageKeys.user.sex, user.sex);
        // localStorage.setItem(storageKeys.user.aboutInfo, user.aboutInfo);
        // localStorage.setItem(storageKeys.user.avatar, user.avatar);
        // localStorage.setItem(storageKeys.user.role, user.role);
        if (!user || user === null) return; // abort
        log('storing user date:', user);
        localStorage.setItem(storageKeys.user.object, JSON.stringify(user));
    },
    playlist: {
        addAudio: function (details) {
            let playlist = readFromStorage(storageKeys.playlist.current);

            if (playlist !== null) playlist = JSON.parse(playlist);

            playlist.push({musicSrc: details.audioUrl, })
        }
    }
}

export default writeToStorage;