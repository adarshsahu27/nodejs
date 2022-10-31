const http= require("http")
const express= require("express")
const cors= require("cors")

const app=express()
const httpServer= http.createServer(app)
app.use(express.urlencoded({ extended: true }));  //encode url
app.use(express.json());     //enables json
app.use(cors());            //allows you to configure the web API's security

//default route
app.use("/", (req, res, next) => {              //route define
  res.send("New server is on");
});

//if something wrong with the server
app.use((req, res, next) => {
  res.status(500).json({
    message: "Something went wrong",
  });
});

const port = 3000;

httpServer.listen(port, () => {
  console.log("serving!!!");
});