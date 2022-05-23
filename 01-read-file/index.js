const fs = require("fs");
const path = require("path");

const stream = new fs.ReadStream(path.join(__dirname, "text.txt"), {
  encoding: "utf-8",
});

let string = "";

stream.on("readable", () => {
  const data = stream.read();

  if (!data) return;

  string = data;
});

stream.on("end", () => process.stdout.write(string));
