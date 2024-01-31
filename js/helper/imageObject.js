const fs = require('fs'); 
const path = require('path')

function generateImageObject(folderPath, folder){
  const imageObject= {}
  const files = fs.readdirSync(folderPath)
  const imageFiles = files.filter(file=> fs.statSync(path.join(folderPath, file)).isFile())
  imageFiles.forEach((file, index)=>{
    imageObject[Number(index+1)] = `assets/images/${folder}/${file}`
  })
  return imageObject;
}

function generateMainObject(imageDirectory){
  const mainObject = {}
  const folders = fs.readdirSync(imageDirectory)
  folders.forEach(folder=>{
    const folderPath = path.join(imageDirectory, folder)
    if (fs.statSync(folderPath).isDirectory()){
      mainObject[folder] = generateImageObject(folderPath, folder)
    }
  })
  return mainObject;
}

const imageDirectory = '../../assets/images'
const result = generateMainObject(imageDirectory)

// console.log(result);

module.exports = generateMainObject