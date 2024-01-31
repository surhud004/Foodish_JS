const fs = require('fs');
const generateMainObject = require('./imageObject');
const imagePath = '../../assets/images'
const fileToWrite = '../images.txt'
function insertToImages(){
  const data = generateMainObject(imagePath)
  // return data;

  fs.writeFileSync(fileToWrite, JSON.stringify(data, null, 2), 'utf-8');
}


console.log(`check===`, insertToImages())