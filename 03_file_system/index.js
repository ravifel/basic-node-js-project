let { readFile, writeFile } = require('fs');

readFile("file.txt", "utf8", (error, text) => {
    if (error) {
        throw error;
    } else {
        console.log(text);
    }
});

writeFile("file.txt", "Adding Text", (error, text) => {
    if (error) {
        throw error;
    }else {
        console.log("Wrote successfully!")
    }
})