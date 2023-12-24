//1. Create a new txt file //

const fs = require('fs')

fs.writeFileSync('notes.txt', 'this file was created by node.js')

//2. Create a copy of the newly created txt

fs.copyFileSync('notes.txt','notes2.txt')

//3. Rename one of the files//

fs.renameSync('notes.txt', 'Death Note.txt')


//4. Get a list of all the file names of the current directory//

const listoffiles = fs.readdirSync('./')
console.log(listoffiles);



//5. another fs method //
fs.rmSync('./notes2.txt')

fs.appendFileSync('Death Note.txt', ' blue is coming for you')



