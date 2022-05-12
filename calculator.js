const express = require('express');
const bodyParser = require("body-parser");
const app =express();
const port =3000;

app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function (req,res) {
  res.sendFile(__dirname+"/index.html");
});
app.post("/",function (req,res) {
  var num1 =Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1+num2;

  res.send("result is "+result);
});
app.listen(port,function () {
  console.log("server started on 3000");
});


app.get("/bmicalculator",function (req,res) {
  res.sendFile(__dirname+"/bmicalculator.html");
});
app.post("/bmicalculator",function (req,res) {
var weight = parseFloat(req.body.weight);
var height = parseFloat(req.body.height);
var result = weight/Math.pow(height,2);
res.send("BMI is "+result);
})
