const http= require("http")
const express= require("express")
const cors= require("cors")
const { default: mongoose } = require("mongoose")

const app=express()
const httpServer= http.createServer(app)
app.use(express.urlencoded({ extended: true }));  //encode url
app.use(express.json());     //enables json
app.use(cors());            //allows you to configure the web API's security

const studentRouter = require("./src/api/student/studentRouter");

app.use("/api/student", studentRouter)


//default route
app.use("/", (req, res, next) => {              //route define
  res.send("Ready to Serve!!!");
});

//if something wrong with the server
app.use((req, res, next) => {
  res.status(500).json({
    message: "Something went wrong",
  });
});

const port = 8001;
mongoose.connect("mongodb+srv://adarshsahu330:adarsh330@nodetrainee.h9oin6n.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db= mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback(){
  console.log("MongoDB coonnected");
  httpServer.listen(port, () => {
    console.log("Serving!!");
  });
});
