Page Downloader
Challenge
60 - 75 minutes

Implement a node app called fetcher.js.

It should take two command line arguments:

a URL
a local file path
It should download the resource at the URL to the local path on your machine. Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.

> node fetcher.js http://www.example.edu/ ./index.html
Downloaded and saved 3261 bytes to ./index.html
Asynchronous Operations
There are two operations in this problem which will take an unknown amount of time:

You need to make an http request and wait for the response.
After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.
When you're trying to control the order of asynchronous operations, you can use nested callbacks.

Reading Documentation
This challenge requires you to search for some answers online. The Node.js official API docs are a valuable resource, but they can feel overwhelming at first. Luckily, the Node.js team has also provided a friendlier guide focused on people who are learning. Here's an example: Writing files with Node.js.

Warning
You may find a function in the Node documentation called writeFileSync. It is considered bad practice to use sync versions of functions that ought to be async. Please avoid it.

Question
How can you get the file size?

There are a couple of ways. If you dig into Node's documentation, you'll find there is a way to get statistics about a file that is sitting on your file system. However, you may not need to do that if you think about the fact that 1 character is equal to 1 byte.

Tips
Install and use the request library to make the HTTP request (We know this library is deprecated but it is still ok to use for our purposes.)
Use Node's fs (file system) module to write the file
Use the callback based approach we've been learning so far
Do not use the pipe function
Do not use synchronous functions (see warning above)
Instruction
Implement the app with the functionality described above.

Once the base case working, take a look at some of the edge cases below.

Edge Cases (Optional Stretch Exercises)
Note
The following edge cases are stretch.

Question
What should happen if:

the local file already exists?
the local file path given is invalid?
the URL results in an error or non-200 result?
We're glad you asked! Look at you, thinking like a dev already! Feel free to handle these edge cases in the stretch activities below.

Edge Case 1: File Already Exists
If the file path already exists, right now your app will overwrite it! If you want to change this, let the user know and prompt them to type in Y(followed by the enter key) to overwrite the file, otherwise skip and exit the app. We suggest using the readline module, which we've previously used.

Edge Case 2: File Path is Invalid
If the file path is invalid, the app should fail and let the user know about this issue.

Edge Case 3: URL is Invalid
If the URL is invalid, terminate the app explaining to the user what went wrong, and not write the response body to the file.

