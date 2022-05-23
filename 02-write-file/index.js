const fs = require("fs");
const path = require("path");
const endInputText = "--END--";
process.stdout.write("Hello world\n");
const stream = fs.createWriteStream(path.join(__dirname, "output.txt"));

process.stdin.on("data", (data) => {
  const str = data.toString();

  if (str.trim().toLowerCase() === "exit") stop();

  stream.write(str);
});

process.on("SIGINT", () => stop());
process.on("exit", () => process.stdout.write(endInputText));

function stop() {
  stream.end();
  process.exit();
}
