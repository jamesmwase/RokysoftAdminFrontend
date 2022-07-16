const fileToBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader(file);
    reader.onloadend = () => {
        // Use a regex to remove data url part
        const base64String = reader.result
            .replace('data:', '')
            .replace(/^.+,/, '');

        console.log(base64String);
        // Logs wL2dvYWwgbW9yZ...
    };
    // return reader.readAsDataURL(file);
});

export default fileToBase64;