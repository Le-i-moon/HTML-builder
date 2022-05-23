const fs = require("fs");
const path = require("path");

fs.exists(path.join(__dirname, "files-copy"), (exists) => {
  if (exists) {
    fs.rm(
      path.join(__dirname, "files-copy"),
      { recursive: true, force: true },
      () => copyFiles()
    );
  } else {
    copyFiles();
  }

  function copyFiles() {
    fs.promises.mkdir(path.join(__dirname, "files-copy"), { recursive: true });

    fs.readdir(path.join(__dirname, "files"), (err, files) => {
      files.forEach((file) => {
        fs.copyFile(
          path.join(__dirname, "files", file),
          path.join(__dirname, "files-copy", file),
          () => {
            if (err) throw err;
          }
        );
      });
    });
  }
});
