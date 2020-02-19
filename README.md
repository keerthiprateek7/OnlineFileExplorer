# OnlineFileExplorer - Node.js

Developed an online file explorer app using NodeJS, HTML, CSS, Bootstrap and deployed it on heroku

#### Modules of Node.js 
I have used the following modules
1. https
2. url
3. path
4. child_process
5. fs

### Functions:

1. decodeURIComponent(pathname) ---> decode url
2. __dirname --> to get current directory
3. path.join(__dirname,'..','static')---> this makes you go back one step and then choose static folder where our main code resides
4. path.join(staticbasepath,pathname)---> joining the staticpath with pathname
5. fs.existsSync()---> to check if file is there are not
6. fs.lstatSync() ---> to see all files in the directory
7. isDirectory() ---> to check for directory
8. fs.readdirSync()---> it is used to loop through elements
9. child_process('command')--- it executes any command that you pass to it 
10. path.extname() ---> to get the extension of the path
11. npm--third party modules to create the same project 


#### Used:
1. breadcrumb
2. nodemon - It is a tool that helps in developing node.js applications by automatically restarting the node application when file changes in the directory are detected.
3. hyper - to execute commands

#### References:

1. https://nodejs.org/api/https.html
2. https://nodejs.org/api/url.html
3. https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/
4. https://nodejs.org/api/child_process.html
5. https://www.w3schools.com/nodejs/ref_path.asp
6. https://nodejs.dev/the-nodejs-path-module
7. https://nodejs.org/api/fs.html
8. https://www.w3schools.com/nodejs/nodejs_filesystem.asp
9. https://code-maven.com/system-information-about-a-file-or-directory-in-nodejs
