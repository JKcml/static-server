const express = require('express');
const app = express();

 
//ads public to the webserver but using static path
app.use("/static", express.static("public"));
app.use("/static/home", express.static("public/home.html"));
app.use("/static/about", express.static("public/about.html"));
app.use("/static/contact", express.static("public/contact.html"));

app.listen(5001, () => {console.log('listening on ports 5001')});


