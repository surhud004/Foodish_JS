const fs = require("fs");
const path = require("path");

const folderPath = "../../assets/images/salad"; 
const imagePath = "../images.js"
const baseName = "salad";
const extension = ".jpg";

const fileNames = fs.readdirSync(folderPath);

fileNames.forEach((fileName, index) => {
  const newFileName = `${baseName}${index + 1}${extension}`;

  const currentFilePath = path.join(folderPath, fileName);

  const newFilePath = path.join(folderPath, newFileName);

  fs.renameSync(currentFilePath, newFilePath);
});

console.log("File renaming completed.");
