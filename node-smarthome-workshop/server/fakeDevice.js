const express = require("express");
const app = express();

const port = process.argv[2];

let deviceState = "off";

const COMMANDS = {
  "Power TOGGLE": "toggle",
  "Power On": "on",
  "Power off": "off"
};

app.get("/cm", (req, res) => {
  const command = COMMANDS[req.query.cmnd];

  switch (command) {
    case "on":
      deviceState = "on";
      break;
    case "off":
      deviceState = "off";
      break;
    case "toggle":
      deviceState = deviceState === "on" ? "off" : "on";
      break;
  }

  console.log(`Received ${command}, current state ${deviceState}`);
  res.send(deviceState);
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
