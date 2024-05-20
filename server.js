const http = require("http");
const { default: mongoose } = require("mongoose");
const { app } = require("./app");
require("dotenv").config();
const httpServer = http.createServer(app);
mongoose.connect(process.env.MONGO_URL, {
  dbName: "UDA",
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback() {
  console.log("MongoDB coonnected");
  httpServer.listen(process.env.PORT || 9999, () => {
    console.log("Serving!!");
  });
});
