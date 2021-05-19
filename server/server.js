//------------Imports
const fn = require('./function-modules');
console.log(fn);
//-------All Declarations
var request = require('request');
var parseString = require('xml2js').parseString;
const express = require('express');
const cors = require('cors');
const app = express(),
  bodyParser = require("body-parser");
port = 3080;
app.use(cors());
app.use(bodyParser.json());

//----------------------making sure the server works 
app.listen(port, () => {
  console.log("Server listening on the port" + port);
})


//---------------Post Request For Login
app.post('/cust/login', (req, res) => {
  user = req.body.username;
  pass = req.body.password;
  options = fn.login_options(user, pass)
  request(options, function (error, response) {
    if (error) throw new Error(error);
    var xml = response.body;
    parseString(xml, function (err, result) {
      result = result['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_CUST_LOGIN_RC.Response'][0]['RESULT'][0];
      return result == 'SUCCESS' ? res.json({ 'username': user, 'isSuccess': true }) : res.json({ 'username': user, 'isSuccess': false });
    });
  });
});

app.post('/cust/edit', (req, res) => {
  var options = fn.customer_edit_options(req.body);
  request(options, function (error, response) {
    if (error) throw new Error(error);
    xml =response.body;
    parseString(xml, function (err, result) {
      result = result['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_CUST_EDIT_RC.Response'][0]['RETURN'][0]['TYPE'][0];
      console.log(result);
      return res.json({"TYPE":result});
      //return result == 'SUCCESS' ? res.json({ 'username': user, 'isSuccess': true }) : res.json({ 'username': user, 'isSuccess': false });
    });
  });
});

app.post('/cust/details',(req,res)=>{
  options = fn.customer_details(req.body);
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    parseString(response.body, function (err, result) {
      result1 = result['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_CUST_DETAILS_RC.Response'][0]['CUSTOMER_DETAILS'][0];
      console.log(result1);
      return res.json({"DETAILS":result1});
      //return result == 'SUCCESS' ? res.json({ 'username': user, 'isSuccess': true }) : res.json({ 'username': user, 'isSuccess': false });
    });
  });
  
})