const fsPromises = require("fs").promises;
const path = require("path");
const stylesFolder = path.join(__dirname, "styles");

async function cssCreateFile() {
  const cssFiles = await fsPromises.readdir(stylesFolder, {
    encoding: "utf-8",
  });
  const cssFilesData = [];

  for (const file of cssFiles) {
    if (path.extname(file) === ".css") {
      cssFilesData.push(
        await fsPromises.readFile(path.join(stylesFolder, file), {
          encoding: "utf8",
        })
      );
    }
  }

  await fsPromises.writeFile(
    path.join(__dirname, "project-dist", "bundle.css"),
    cssFilesData.join("\n"),
    { encoding: "utf-8" }
  );
}

cssCreateFile();
