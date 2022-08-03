const fs = require("fs");
const path = require("path");


const models = fs.readdirSync(path.join(__dirname, "databases"));
models.forEach((model) => {
  const modelName = model.split(".")[0];
  const modelPath = path.join(__dirname, "databases", model);
  const modelFile = require(modelPath);
  module.exports[modelName] = modelFile;
});
