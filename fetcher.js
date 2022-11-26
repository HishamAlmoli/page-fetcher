const request = require('request');
const fs = require('fs');
const arguments = process.argv.slice(2);

const url = arguments[0];
const file = arguments[1];
request(url, (error, response, body) => {
if (error !== null) {
    console.log(`Error during requesting this url ${url}: ${error}`);
    console.log(`StatusCode : ${response.statusCode}`);
    console.log(`Body : ${body}`);
} else {
    fs.writeFile(file, body, err => {
        if (err) {
          console.error(`Error during writing it to the file ${err}`);
        }
        console.log(`Downloaded and saved ${body.length} bytes to ${file}`)
    });
}
});


// need to make an http request and wait for response. check client related exercises
// after http request is complete need to take the data received and write it to a file in your local file system
