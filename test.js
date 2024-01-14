const fs = require("fs");

addContent(callbck) {
    fs.readFile(filePath, (err, fileContent) => {
    //   if (err) return [];
      const content = JSON.parse(fileContent);
      content.push(this);
    
      fs.writeFile(filePath, JSON.stringify(newContent), (err) => {
        if (err) callback (err);
        else return callbck([]);
      });
    });
}
