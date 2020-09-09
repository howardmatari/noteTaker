const express=require ("express");
const apiRoutes=require("./routes/api")
const htmlRoutes=require("./routes/html")

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api",apiRoutes);
app.use("/",htmlRoutes);



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
