const fs = require("fs");
const path = require("path");

fs.readdir(path.join(__dirname, "secret-folder"), "utf8", (err, files) => {
  files.forEach((file) => {
    fs.stat(path.join(__dirname, "secret-folder", file), (err, stats) => {
      if (stats.isFile()) {
        const fileData = path.parse(file);
        process.stdout.write(
          `${fileData.name} - ${fileData.ext.replace(".", "")} - ${
            stats.size
          }b\n`
        );
      }
    });
  });
});
