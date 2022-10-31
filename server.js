const http= require("http")
const express= require("express")
const cors= require("cors")

const app=express()
const httpServer= http.createServer(app)
app.use(express.urlencoded({ extended: true }));  //encode url
app.use(express.json());     //enables json
app.use(cors());            //allows you to configure the web API's security

const clg= ["MCA", "MBA", "BCA", "BBA"];
//default route
app.get("/", (req, res, next) => {              //route define
  res.send("Ready to Serve!!!");
});

app.get("/hi", (req, res, next) => {  
  // res.send("Hiii");   
  console.log(req.query);     
  res.send(clg[0]);
});

app.post("/hi", (req, res, next) => {    
  console.log(req.body);   
  clg.push(req.body.name)     
  res.send(clg);
});

app.put("/hi", (req, res, next) => {   
  console.log(req);         
  res.send(clg[2]);
});

app.delete("/hi", (req, res, next) => {
  console.log(req);            
  res.send(clg[3]);
});


//if something wrong with the server
app.use((req, res, next) => {
  res.status(500).json({
    message: "Something went wrong",
  });
});

const port = process.env.PORT || 8001;

httpServer.listen(port, () => {
  console.log("serving!!!");
});