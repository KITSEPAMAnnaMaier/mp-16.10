const express = require("express");
const mongoose = require("mongoose");

const corsMiddleware = require("./middlewares/cors");
const devicesRouter = require("./routes/devices");

const app = express();
const PORT = 4000;

mongoose.connect("mongodb+srv://anna:K80coc95lu@uni-system-d1ipe.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });

app.use(express.json());
app.use(corsMiddleware);
app.use("/devices", devicesRouter);

app.get("/", (req, res) => {
  res.json({ result: "okey dokey" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
