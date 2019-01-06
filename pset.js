const fs = require('fs')

//Promise is the PRODUCER
const readFilePromise = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      if (err)reject(err)
      else resolve(data); //if state changes to resolved, passed in data, resolve can only take 1 arg
    });
  });
}

//.then()is the consumer
const readFile = readFilePromise('newfile.txt')
readFile.then((fileData)=>{
  console.log(fileData)
}, err =>{
  console.log('code is broken', err)
})
  

const writeFilePromise = (fileName, dataToPass) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, dataToPass, (err) => {
      if(err) reject(err)
      else resolve('succesfully wrote file')
    })
  })
}

writeFilePromise("hello.txt", 'Hello World!')
  .then((dataToPass) => { //this data is eitehr line 23 OR line 24
    console.log(dataToPass)
  })


const copyFile = (fileName, newFileName) => {
  return readFilePromise(fileName)
    .then(fileData=>{
      return writeFilePromise(newFileName, fileData)
  })
}

copyFile('newfile.txt', 'hello.txt')
  .then(()=>{
    console.log('successfully copied file!')
  })

// concatFiles= (fileName, newFile) => {
//   readFilePromise().then(()=>{
//     return 
//   })

// }