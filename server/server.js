//------------Imports
var fn = require('./function-modules');
//-------All Declarations
var request = require('request');
var parseString = require('xml2js').parseString;
var express = require('express');
var cors = require('cors');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rachel883omega@gmail.com',
    pass: 'rcynthia2000'
  }
});
var app = express(),
  bodyParser = require("body-parser");
port = 3080;
app.use(cors());
app.use(bodyParser.json());

//----------------------making sure the server works 
app.listen(port, () => {
  console.log("Server listening on the port" + port);
});

app.post('/message', (req, res) => {
  console.log(req.body);
  var mailOptions = {
    from: 'rachel883omega@gmail.com',
    to: 'rachel883omega@gmail.com',
    subject: 'Mail Received from ' + req.body.email,
    text: 'Title :' + req.body.title + '\n Message: ' + req.body.message
  };
  transporter.sendMail(mailOptions)
  var mailOptions1 = {
    from: 'rachel883omega@gmail.com',
    to: req.body.email,
    subject: 'Mail Sent From K-Biz App',
    text: 'Title :' + req.body.title + '\n Message: ' + req.body.message
  };
  transporter.sendMail(mailOptions1, function (error, info) {
    if (error) {
      res.json({ "sent": 0 });
    } else {
      res.json({ "sent": 1 });
    }
  });
  res.json({ "sent": 1 });
});

//---------------Post Request For Login
app.post('/cust/login', (req, res) => {
  user = req.body.username;
  pass = req.body.password;
  options = fn.login_options(user, pass);
  request(options, function (error, response) {
    if (error) throw new Error(error);
    var xml = response.body;
    parseString(xml, function (err, result) {
      result = result['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_CUST_LOGIN_RC.Response'][0]['RESULT'][0];
      console.log(result);
      return result == 'SUCCESS' ? res.json({ 'username': user, 'isSuccess': true }) : res.json({ 'username': user, 'isSuccess': false });
    });
  });
});

app.post('/cust/details', (req, res) => {

  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_profiledet',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=EhE6odfqIKXWmy8g8Jtr7ZDoyonIeQF-Y2kA_SAP2h-Wl9jpdhg5Dq2mzzwp-qrA; MYSAPSSO2=AjExMDAgAA1wb3J0YWw6UE9VU0VSiAAHZGVmYXVsdAEABlBPVVNFUgIAAzAwMAMAA0tQTwQADDIwMjEwNjAxMTcxNgUABAAAAAgKAAZQT1VTRVL%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjEwNjAxMTcxNjE1WjAjBgkqhkiG9w0BCQQxFgQUCZZKkf9pjdPoEgd4sr97wu7AWMowCQYHKoZIzjgEAwQuMCwCFH7URQRJgvhrEYBzsd%2F0%2FE4lh48sAhQ1Zvnb2y1c!WO5Ruxgu!taG%2FmLsQ%3D%3D; JSESSIONMARKID=myyJNAZFu8gHJKtj-VY9dtcDzqAQ47_f83In5jaQA'
    },
    //body: JSON.stringify({"CUSTOMERNO":"0000179999"})
    body: JSON.stringify(req.body)
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(JSON.parse(response.body));
  });

});


app.post('/cust/details1', (req, res) => {
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/profdet1',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=LuT5btpHBo34FxssWOcf1mDm0DfyeQF-Y2kA_SAPFYMUZOEbToK2aaXXMcemR7Y3; JSESSIONMARKID=iUrcqQ3MScPNNv0Hcfjwbe_DrCPakv4xRajX5jaQA'
    },
    // body: JSON.stringify({"CUSTOMERNO":"0000050036"})
    body: JSON.stringify(req.body)

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(JSON.parse(response.body));
  });

});

app.post('/cust/edit', (req, res) => {


  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_custeditdet',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=LuT5btpHBo34FxssWOcf1mDm0DfyeQF-Y2kA_SAPFYMUZOEbToK2aaXXMcemR7Y3; JSESSIONMARKID=iUrcqQ3MScPNNv0Hcfjwbe_DrCPakv4xRajX5jaQA'
    },
    //body: JSON.stringify({"CUSTOMERNO":"","PI_PERSONALDATA":{"TITLE_P":"","FIRSTNAME":"","LASTNAME":"","MIDDLENAME":"","SECONDNAME":"","DATE_BIRTH":"","CITY":"","DISTRICT":"","POSTL_COD1":"","POSTL_COD2":"","PO_BOX":"","PO_BOX_CIT":"","STREET":"","HOUSE_NO":"","BUILDING":"","FLOOR":"","ROOM_NO":"","COUNTRY":"","COUNTRYISO":"","REGION":"","TEL1_NUMBR":"","TEL1_EXT":"","FAX_NUMBER":"","FAX_EXTENS":"","E_MAIL":"","LANGU_P":"","LANGUP_ISO":"","CURRENCY":"","CURRENCY_ISO":"","TITLE_KEY":"","ONLY_CHANGE_COMADDRESS":""},"PI_PERSONALDATAX":{"TITLE_P":"","FIRSTNAME":"","LASTNAME":"","MIDDLENAME":"","SECONDNAME":"","DATE_BIRTH":"","CITY":"","DISTRICT":"","POSTL_COD1":"","POSTL_COD2":"","PO_BOX":"","PO_BOX_CIT":"","STREET":"","HOUSE_NO":"","BUILDING":"","FLOOR":"","ROOM_NO":"","COUNTRY":"","COUNTRYISO":"","REGION":"","TEL1_NUMBR":"","TEL1_EXT":"","FAX_NUMBER":"","FAX_EXTENS":"","E_MAIL":"","LANGU_P":"","LANGUP_ISO":"","CURRENCY":"","CURRENCY_ISO":"","ONLY_CHANGE_COMADDRESS":""}})
    body: JSON.stringify(req.body)
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(JSON.parse(response.body));
  });


});

app.post('/cust/getListSalesDoc', (req, res) => {
  var request = require('request');
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_getsalesdoc',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=5l-uptfepwrgQScxAk7pElptTnWIeQF-Y2kA_SAPhzhYgEkBaixZsyzlvTosAZCA; JSESSIONMARKID=ve7c6A781n2ChOGsp5eVe_y9o5Aw3G6_3IR35jaQA'
    },
    body: JSON.stringify(req.body)
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(JSON.parse(response.body));
    res.json(JSON.parse(response.body));
  });


});

app.post('/cust/getInquiry', (req, res) => {
  var request = require('request');
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_inquirydetails',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=FpksJSLgF52U7hkRmGkDfsIj1o2OeQF-Y2kA_SAPr93PdhGqru34A1YZqNgMHTzw; JSESSIONMARKID=6x6HUQB8A378I-7reXRWG_AqXHiv7sUqaZnH5jaQA'
    },
    body: JSON.stringify(req.body)

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(JSON.parse(response.body));
  });

});

app.post('/cust/getListSalesOrder', (req, res) => {
  var request = require('request');
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_getsalesorder',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=mtKpovnSy7clhCYr-HeQzcRNq4mTeQF-Y2kA_SAPFmr7rooKgA9us6uU47QzXbTL; JSESSIONMARKID=EbexGQpA_nDz14pA-NgmkNm6CVV-OksE-l6H5jaQA'
    },
    // body: JSON.stringify({ "CUSTOMER": "0000179999", "SALES_ORG": "SA01" })
    body: JSON.stringify(req.body)

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    res.json(JSON.parse(response.body));
  });

});

app.post('/cust/getSalesOrder', (req, res) => {
  var request = require('request');
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_saleorderdetails',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=mtKpovnSy7clhCYr-HeQzcRNq4mTeQF-Y2kA_SAPFmr7rooKgA9us6uU47QzXbTL; JSESSIONMARKID=EbexGQpA_nDz14pA-NgmkNm6CVV-OksE-l6H5jaQA'
    },
    // body: JSON.stringify({ "SALES_DOC": "0000000668" })
    body: JSON.stringify(req.body)

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    res.json(JSON.parse(response.body));
  });

});

app.post('/cust/deliveryList', (req, res) => {
  var request = require('request');
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_deliverylist',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=Q3M_NfRCNbowwJCGZIO6kRxjg0jMeQF-Y2kA_SAPnwuEQs2ANIDZnqTfLFx-YD_F; JSESSIONMARKID=6p4WqghlNVrIQBgxg5KZlPYMBIJi_InwFHY35jaQA'
    },
    // body: JSON.stringify({ "CUSTOMER_NUMBER": "0000179999" })
    body: JSON.stringify(req.body)

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body)
    res.json(JSON.parse(response.body));
  });

});

app.post('/cust/deliveryDisplay', (req, res) => {
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_delivdet',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=5gbLgL81g1855fsYl2nZjjL2UO_0eQF-Y2kA_SAPUfdSLIwlG6uwvUZDOlfBJCHz; JSESSIONMARKID=3S1Ivw2VdrMRFrbb3sseqcviDTsXQOub4YuX5jaQA'
    },
    // body: JSON.stringify({"DELIVERY_DOC":"0080000037"})
    body: JSON.stringify(req.body)
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(JSON.parse(response.body));
  });

});


app.post('/cust/aging/list', (req, res) => {

  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_aging',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=EhE6odfqIKXWmy8g8Jtr7ZDoyonIeQF-Y2kA_SAP2h-Wl9jpdhg5Dq2mzzwp-qrA; MYSAPSSO2=AjExMDAgAA1wb3J0YWw6UE9VU0VSiAAHZGVmYXVsdAEABlBPVVNFUgIAAzAwMAMAA0tQTwQADDIwMjEwNjAxMTcxNgUABAAAAAgKAAZQT1VTRVL%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjEwNjAxMTcxNjE1WjAjBgkqhkiG9w0BCQQxFgQUCZZKkf9pjdPoEgd4sr97wu7AWMowCQYHKoZIzjgEAwQuMCwCFH7URQRJgvhrEYBzsd%2F0%2FE4lh48sAhQ1Zvnb2y1c!WO5Ruxgu!taG%2FmLsQ%3D%3D; JSESSIONMARKID=wYx_IABmwu8Rwx9EkxhHcrKsR8VnIxynfxEX5jaQA'
    },
    // body: JSON.stringify({ "CUSTOMER_NUM": "0000131313" })
    body: JSON.stringify(req.body)

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(JSON.parse(response.body));
  });

});

app.post('/cust/aging/display', (req, res) => {
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_agingitems',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=EhE6odfqIKXWmy8g8Jtr7ZDoyonIeQF-Y2kA_SAP2h-Wl9jpdhg5Dq2mzzwp-qrA; MYSAPSSO2=AjExMDAgAA1wb3J0YWw6UE9VU0VSiAAHZGVmYXVsdAEABlBPVVNFUgIAAzAwMAMAA0tQTwQADDIwMjEwNjAxMTcxNgUABAAAAAgKAAZQT1VTRVL%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjEwNjAxMTcxNjE1WjAjBgkqhkiG9w0BCQQxFgQUCZZKkf9pjdPoEgd4sr97wu7AWMowCQYHKoZIzjgEAwQuMCwCFH7URQRJgvhrEYBzsd%2F0%2FE4lh48sAhQ1Zvnb2y1c!WO5Ruxgu!taG%2FmLsQ%3D%3D; JSESSIONMARKID=0bjoJgI1GM2iMD0EdFurGb77E-muFYr-7FJn5jaQA'
    },
    //body: JSON.stringify({"DOC_NUM":"0005000003"})
    body: JSON.stringify(req.body)
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(JSON.parse(response.body))
  });

});

app.post('/cust/memo/list', (req, res) => {

  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_creditdebit',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=EhE6odfqIKXWmy8g8Jtr7ZDoyonIeQF-Y2kA_SAP2h-Wl9jpdhg5Dq2mzzwp-qrA; MYSAPSSO2=AjExMDAgAA1wb3J0YWw6UE9VU0VSiAAHZGVmYXVsdAEABlBPVVNFUgIAAzAwMAMAA0tQTwQADDIwMjEwNjAxMTcxNgUABAAAAAgKAAZQT1VTRVL%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjEwNjAxMTcxNjE1WjAjBgkqhkiG9w0BCQQxFgQUCZZKkf9pjdPoEgd4sr97wu7AWMowCQYHKoZIzjgEAwQuMCwCFH7URQRJgvhrEYBzsd%2F0%2FE4lh48sAhQ1Zvnb2y1c!WO5Ruxgu!taG%2FmLsQ%3D%3D; JSESSIONMARKID=wYx_IABmwu8Rwx9EkxhHcrKsR8VnIxynfxEX5jaQA'
    },
    // body: JSON.stringify({ "CUSTOMER_NO": "0000000018", "DOC_TYPE": "O" })
    body: JSON.stringify(req.body)

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(JSON.parse(response.body));
  });

});

app.post('/cust/memo/display', (req, res) => {
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_creditdebit_details',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=EhE6odfqIKXWmy8g8Jtr7ZDoyonIeQF-Y2kA_SAP2h-Wl9jpdhg5Dq2mzzwp-qrA; MYSAPSSO2=AjExMDAgAA1wb3J0YWw6UE9VU0VSiAAHZGVmYXVsdAEABlBPVVNFUgIAAzAwMAMAA0tQTwQADDIwMjEwNjAxMTcxNgUABAAAAAgKAAZQT1VTRVL%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjEwNjAxMTcxNjE1WjAjBgkqhkiG9w0BCQQxFgQUCZZKkf9pjdPoEgd4sr97wu7AWMowCQYHKoZIzjgEAwQuMCwCFH7URQRJgvhrEYBzsd%2F0%2FE4lh48sAhQ1Zvnb2y1c!WO5Ruxgu!taG%2FmLsQ%3D%3D; JSESSIONMARKID=wYx_IABmwu8Rwx9EkxhHcrKsR8VnIxynfxEX5jaQA'
    },
    // body: JSON.stringify({"BILLING_DOC":"0090000009"})
    body: JSON.stringify(req.body)
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(JSON.parse(response.body));
  });

});

app.post('/cust/memo/pricing', (req, res) => {

  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_custpricing',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=EhE6odfqIKXWmy8g8Jtr7ZDoyonIeQF-Y2kA_SAP2h-Wl9jpdhg5Dq2mzzwp-qrA; MYSAPSSO2=AjExMDAgAA1wb3J0YWw6UE9VU0VSiAAHZGVmYXVsdAEABlBPVVNFUgIAAzAwMAMAA0tQTwQADDIwMjEwNjAxMTcxNgUABAAAAAgKAAZQT1VTRVL%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjEwNjAxMTcxNjE1WjAjBgkqhkiG9w0BCQQxFgQUCZZKkf9pjdPoEgd4sr97wu7AWMowCQYHKoZIzjgEAwQuMCwCFH7URQRJgvhrEYBzsd%2F0%2FE4lh48sAhQ1Zvnb2y1c!WO5Ruxgu!taG%2FmLsQ%3D%3D; JSESSIONMARKID=wUiMiggJG3-JhzO1__HLKQC8IDhDcfnS4_Kn5jaQA'
    },
    //body: JSON.stringify({"DOC_COND":"0000003204","ITEM":"10"})
    body: JSON.stringify(req.body)
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    console.log("done");
    res.json(JSON.parse(response.body));
  });

})



app.post('/cust/dataUpload', (req, res) => {
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_custcreate',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=EhE6odfqIKXWmy8g8Jtr7ZDoyonIeQF-Y2kA_SAP2h-Wl9jpdhg5Dq2mzzwp-qrA; MYSAPSSO2=AjExMDAgAA1wb3J0YWw6UE9VU0VSiAAHZGVmYXVsdAEABlBPVVNFUgIAAzAwMAMAA0tQTwQADDIwMjEwNjAxMTcxNgUABAAAAAgKAAZQT1VTRVL%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjEwNjAxMTcxNjE1WjAjBgkqhkiG9w0BCQQxFgQUCZZKkf9pjdPoEgd4sr97wu7AWMowCQYHKoZIzjgEAwQuMCwCFH7URQRJgvhrEYBzsd%2F0%2FE4lh48sAhQ1Zvnb2y1c!WO5Ruxgu!taG%2FmLsQ%3D%3D; JSESSIONMARKID=0bjoJgI1GM2iMD0EdFurGb77E-muFYr-7FJn5jaQA'
    },
    //body: JSON.stringify({"COMPANYDATA":{"TITLE":"","TITLE_KEY":"","NAME":"","NAME_2":"","NAME_3":"","NAME_4":"","C_O_NAME":"","CITY":"","DISTRICT":"","CITY_NO":"","POSTL_COD1":"","POSTL_COD2":"","POSTL_COD3":"","PO_BOX":"","PO_BOX_CIT":"","DELIV_DIS":"","STREET":"","HOUSE_NO":"","BUILDING":"","FLOOR":"","ROOM_NO":"","COUNTRY":"","LANGU":"","REGION":"","TEL1_NUMBR":"","TEL1_EXT":"","FAX_NUMBER":"","FAX_EXTENS":"","E_MAIL":"","COUNTRYISO":"","LANGU_ISO":"","CURRENCY":"","CURRENCY_ISO":""},"CONSUMEREN":"","COPYREFERENCE":{"SALESORG":"","DISTR_CHAN":"","DIVISION":"","REF_CUSTMR":""},"CREDIT_CONTROL_FLAG":"","OPT_COMPANYDATA":{"TRANSPZONE":"","CONTROL_ACCOUNT":"","PMNTTRMS":"","SHIP_COND":"","DELYG_PLNT":"","PART_DLV":"","C_CTR_AREA":"","TAXJURCODE":""},"OPT_PERSONAL_DATA":{"TRANSPZONE":"","CONTROL_ACCOUNT":"","PMNTTRMS":"","SHIP_COND":"","DELYG_PLNT":"","PART_DLV":"","C_CTR_AREA":"","TAXJURCODE":""},"PERSONAL_DATA":{"TITLE_P":"","FIRSTNAME":"","LASTNAME":"","MIDDLENAME":"","SECONDNAME":"","DATE_BIRTH":"","CITY":"","DISTRICT":"","POSTL_COD1":"","POSTL_COD2":"","PO_BOX":"","PO_BOX_CIT":"","STREET":"","HOUSE_NO":"","BUILDING":"","FLOOR":"","ROOM_NO":"","COUNTRY":"","COUNTRYISO":"","REGION":"","TEL1_NUMBR":"","TEL1_EXT":"","FAX_NUMBER":"","FAX_EXTENS":"","E_MAIL":"","LANGU_P":"","LANGUP_ISO":"","CURRENCY":"","CURRENCY_ISO":"","TITLE_KEY":"","ONLY_CHANGE_COMADDRESS":""}})
    body: JSON.stringify(req.body)
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(JSON.parse(response.body))
  });

})



app.post('/vend/details', (req, res) => {
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_vend_details',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=yNKZ8SBb9w5B4AUEX_oVGVwR2Jb8eQF-Y2kA_SAPhAbs3_YIXeSGoHRoB4ukhSe-; JSESSIONMARKID=ncHPgA99YqKHLtp_8SAzMuJksV4uw3AZiaK35jaQA'
    },
    // body: JSON.stringify({ "VENDOR_NUMBER": "SA100200" })
    body: JSON.stringify(req.body)
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(JSON.parse(response.body))
  });

})

app.post('/vend/edit', (req, res) => {
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_vend_edit',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=yNKZ8SBb9w5B4AUEX_oVGVwR2Jb8eQF-Y2kA_SAPhAbs3_YIXeSGoHRoB4ukhSe-; JSESSIONMARKID=ncHPgA99YqKHLtp_8SAzMuJksV4uw3AZiaK35jaQA'
    },
    //body: JSON.stringify({"TY_LFA1":{"MANDT":"","LIFNR":"","LAND1":"","NAME1":"","NAME2":"","NAME3":"","NAME4":"","ORT01":"","ORT02":"","PFACH":"","PSTL2":"","PSTLZ":"","REGIO":"","SORTL":"","STRAS":"","ADRNR":"","MCOD1":"","MCOD2":"","MCOD3":"","ANRED":"","BAHNS":"","BBBNR":"","BBSNR":"","BEGRU":"","BRSCH":"","BUBKZ":"","DATLT":"","DTAMS":"","DTAWS":"","ERDAT":"","ERNAM":"","ESRNR":"","KONZS":"","KTOKK":"","KUNNR":"","LNRZA":"","LOEVM":"","SPERR":"","SPERM":"","SPRAS":"","STCD1":"","STCD2":"","STKZA":"","STKZU":"","TELBX":"","TELF1":"","TELF2":"","TELFX":"","TELTX":"","TELX1":"","XCPDK":"","XZEMP":"","VBUND":"","FISKN":"","STCEG":"","STKZN":"","SPERQ":"","GBORT":"","GBDAT":"","SEXKZ":"","KRAUS":"","REVDB":"","QSSYS":"","KTOCK":"","PFORT":"","WERKS":"","LTSNA":"","WERKR":"","PLKAL":"","DUEFL":"","TXJCD":"","SPERZ":"","SCACD":"","SFRGR":"","LZONE":"","XLFZA":"","DLGRP":"","FITYP":"","STCDT":"","REGSS":"","ACTSS":"","STCD3":"","STCD4":"","STCD5":"","IPISP":"","TAXBS":"","PROFS":"","STGDL":"","EMNFR":"","LFURL":"","J_1KFREPRE":"","J_1KFTBUS":"","J_1KFTIND":"","CONFS":"","UPDAT":"","UPTIM":"","NODEL":"","QSSYSDAT":"","PODKZB":"","FISKU":"","STENR":"","CARRIER_CONF":"","MIN_COMP":"","TERM_LI":"","CRC_NUM":"","CVP_XBLCK":"","RG":"","EXP":"","UF":"","RGDATE":"","RIC":"","RNE":"","RNEDATE":"","CNAE":"","LEGALNAT":"","CRTN":"","ICMSTAXPAY":"","INDTYP":"","TDT":"","COMSIZE":"","DECREGPC":"","DUNSP4":"","J_SC_CAPITAL":"","J_SC_CURRENCY":"","ALC":"","PMT_OFFICE":"","PPA_RELEVANT":"","PSOFG":"","PSOIS":"","PSON1":"","PSON2":"","PSON3":"","PSOVN":"","PSOTL":"","PSOHS":"","PSOST":"","BORGR_DATUN":"","BORGR_YEAUN":"","TRANSPORT_CHAIN":"","STAGING_TIME":"","SCHEDULING_TYPE":"","SUBMI_RELEVANT":"","ZZMATKL":""}})
    body: JSON.stringify(req.body)
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(JSON.parse(response.body));
  });

});

app.post('/vend/goods/details', (req, res) => {
  var request = require('request');
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_vend_goods_details',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=TzHAibNtL_PSrMOn08CWw3BtLGIFegF-Y2kA_SAP9m7FW6P6SizbKh091fMiU3Ke; JSESSIONMARKID=fk1gTgwCGyKe5KqCL9J-5fa3ZduL8V5p7Wxn5jaQA'
    },
    // body: JSON.stringify({"MATERIAL":"5000000020","YEAR":"2015"})
    body: JSON.stringify(req.body)

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(JSON.parse(response.body));
  });


});

app.post('/vend/goods/list', (req, res) => {
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_vend_goods_list',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=yNKZ8SBb9w5B4AUEX_oVGVwR2Jb8eQF-Y2kA_SAPhAbs3_YIXeSGoHRoB4ukhSe-; JSESSIONMARKID=ncHPgA99YqKHLtp_8SAzMuJksV4uw3AZiaK35jaQA'
    },
    // body: JSON.stringify({ "VENDOR": "SA100200" })
    body: JSON.stringify(req.body)

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(JSON.parse(response.body));
  });


});

app.post('/vend/login', (req, res) => {
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_vend_login',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=FRhiRs2CW9jjaNIhoQVfgIQy4r7-eQF-Y2kA_SAPfHhjad1pn225oeWMGr-56y7h; JSESSIONMARKID=CBDrjQo6gE15u1nSEJdoZ182qOe9pUjwyCTH5jaQA'
    },
    // body: JSON.stringify({"USERNAME":"","PASSWORD":""})
    body: JSON.stringify(req.body)
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(JSON.parse(response.body));
  });

});

app.post('/vend/po/det', (req, res) => {
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_vend_po',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=FRhiRs2CW9jjaNIhoQVfgIQy4r7-eQF-Y2kA_SAPfHhjad1pn225oeWMGr-56y7h; JSESSIONMARKID=CBDrjQo6gE15u1nSEJdoZ182qOe9pUjwyCTH5jaQA'
    },
    // body: JSON.stringify({"DOC_NUM":""})
    body: JSON.stringify(req.body)

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(JSON.parse(response.body));
  });

});

app.post('/vend/po/list', (req, res) => {
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_vend_po_list',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=FRhiRs2CW9jjaNIhoQVfgIQy4r7-eQF-Y2kA_SAPfHhjad1pn225oeWMGr-56y7h; JSESSIONMARKID=CBDrjQo6gE15u1nSEJdoZ182qOe9pUjwyCTH5jaQA'
    },
    // body: JSON.stringify({"VENDOR_NUMBER":"SA100200"})
    body: JSON.stringify(req.body)

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(JSON.parse(response.body));
  });

});

app.post('/vend/rfq/det', (req, res) => {
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_vend_rfq',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=FRhiRs2CW9jjaNIhoQVfgIQy4r7-eQF-Y2kA_SAPfHhjad1pn225oeWMGr-56y7h; JSESSIONMARKID=CBDrjQo6gE15u1nSEJdoZ182qOe9pUjwyCTH5jaQA'
    },
    // body: JSON.stringify({"DOC_NUM":""})
    body: JSON.stringify(req.body)

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(JSON.parse(response.body));
  });

});

app.post('/vend/rfq/list', (req, res) => {
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_vend_rfq_list',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=FRhiRs2CW9jjaNIhoQVfgIQy4r7-eQF-Y2kA_SAPfHhjad1pn225oeWMGr-56y7h; JSESSIONMARKID=CBDrjQo6gE15u1nSEJdoZ182qOe9pUjwyCTH5jaQA'
    },
    // body: JSON.stringify({"VENDOR_NO":""})
    body: JSON.stringify(req.body)

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(JSON.parse(response.body));
  });

});

app.post('/vend/inv/det', (req, res) => {
  var request = require('request');
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_vend_invoice_det',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=hEAN2_UeFq0ZYP53CM6p_GgZYDkKegF-Y2kA_SAPal-_dIcprQriCYePiB2Yaem_; JSESSIONMARKID=ReKOFQ6DCOG5f5yItdRu6zNBH7y6WaNOCn-35jaQA'
    },
    // body: JSON.stringify({"YEAR":"2015","INVOICE":"5105600761"})
    body: JSON.stringify(req.body)

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(JSON.parse(response.body));
  });

});

app.post('/vend/inv/list',(req,res)=>{
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_vend_invoice_list',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=jbqtz-RJQYBjoTN4_LLc869pz58LegF-Y2kA_SAPZPtTmGu_BbJp2vI3O1-IyvVx; JSESSIONMARKID=Y_3amwyIjvFb84fdU3d__RBFyRAc6U5lKnFH5jaQA'
  },
  // body: JSON.stringify({"VENDOR":"SA100200"})
  body: JSON.stringify(req.body)

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});

});

app.post('/vend/aging', (req, res) => {
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_vend_aging_list',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=STWfJS9q713u0nwq9UDLuOPFSjMMegF-Y2kA_SAP9ceNcHY9y3dCCt4qO8_QStZv; JSESSIONMARKID=hE2lPAfN5tacZ3pEVZcjZ6QSzXimkmRY3PGX5jaQA'
  },
  // body: JSON.stringify({"VENDOR":"SA100200"})
  body: JSON.stringify(req.body)

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});

});

app.post('/vend/aging/det',(req,res)=>{
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_aging_det',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=STWfJS9q713u0nwq9UDLuOPFSjMMegF-Y2kA_SAP9ceNcHY9y3dCCt4qO8_QStZv; JSESSIONMARKID=hE2lPAfN5tacZ3pEVZcjZ6QSzXimkmRY3PGX5jaQA'
  },
  // body: JSON.stringify({"DOC_NUM":"4500000000"})
  body: JSON.stringify(req.body)

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});

});

app.post('/vend/memo/list',(req,res)=>{
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_vend_memo',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=STWfJS9q713u0nwq9UDLuOPFSjMMegF-Y2kA_SAP9ceNcHY9y3dCCt4qO8_QStZv; JSESSIONMARKID=hE2lPAfN5tacZ3pEVZcjZ6QSzXimkmRY3PGX5jaQA'
  },
  // body: JSON.stringify({"VENDOR":"SA100200","DOC_TYPE":"S"})
  body: JSON.stringify(req.body)
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});

});

app.post('/vend/memo/det',(req,res)=>{
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_memo_det',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=STWfJS9q713u0nwq9UDLuOPFSjMMegF-Y2kA_SAP9ceNcHY9y3dCCt4qO8_QStZv; JSESSIONMARKID=hE2lPAfN5tacZ3pEVZcjZ6QSzXimkmRY3PGX5jaQA'
    },
    // body: JSON.stringify({"DOC_NUM":"4500000000"})
    body: JSON.stringify(req.body)
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(JSON.parse(response.body));
  });
  
});

app.post('/vend/po/create',(req,res)=>{
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_vend_po_create',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=b0-ieJdXmDWqQtUoqbEa4JE0rws6egF-Y2kA_SAPDSy8daXWbzvEVRR2AUZwxO71; JSESSIONMARKID=LbXaZwHtDWGblUuw9uvC_ZbDI6Dgu3wa9a1X5jaQA'
  },
  // body: JSON.stringify({"PO_HEADER":{"DOC_DATE":"","DOC_TYPE":"","DOC_CAT":"","CO_CODE":"","PURCH_ORG":"","PUR_GROUP":"","AGREEMENT":"","VENDOR":"","PO_NUMBER":"","SUPPL_PLNT":"","CREATED_BY":"","LANGU":"","LANGU_ISO":""},"PO_ITEMS":{"item":{"PO_NUMBER":"","PO_ITEM":"","ADDRESS":"","MATERIAL":"","PUR_MAT":"","INFO_REC":"","ITEM_CAT":"","ACCTASSCAT":"","AGREEMENT":"","AGMT_ITEM":"","STORE_LOC":"","MAT_GRP":"","SHORT_TEXT":"","DISTRIB":"","PART_INV":"","KANBAN_IND":"","PLANT":"","ALLOC_TBL":"","AT_ITEM":"","UNIT":"","NET_PRICE":"","PRICE_UNIT":"","CONV_NUM1":"","CONV_DEN1":"","ORDERPR_UN":"","PCKG_NO":"","PROMOTION":"","ACKN_REQD":"","TRACKINGNO":"","PLAN_DEL":"","RET_ITEM":"","AT_RELEV":"","VEND_MAT":"","MANUF_PROF":"","MANU_MAT":"","MFR_NO":"","MFR_NO_EXT":"","PO_PRICE":"","SHIPPING":"","ITEM_CAT_EXT":"","PO_UNIT_ISO":"","ORDERPR_UN_ISO":"","PREQ_NAME":"","DISP_QUAN":"","QUAL_INSP":"","NO_MORE_GR":"","DELETE_IND":"","NO_ROUNDING":"","TAX_CODE":"","MATERIAL_EXTERNAL":"","MATERIAL_GUID":"","MATERIAL_VERSION":"","PUR_MAT_EXTERNAL":"","PUR_MAT_GUID":"","PUR_MAT_VERSION":"","VAL_TYPE":"","PR_CLOSED":"","ACKNOWL_NO":"","REQ_SEGMENT":"","STK_SEGMENT":""}},"PO_ITEM_SCHEDULES":{"item":{"PO_ITEM":"","SERIAL_NO":"","DEL_DATCAT":"","DELIV_DATE":"","DELIV_TIME":"","QUANTITY":"","PREQ_NO":"","PREQ_ITEM":"","CREATE_IND":"","QUOTA_NO":"","QUOTA_ITEM":"","BOMEXPL_NO":"","RESERV_NO":"","BATCH":"","VEND_BATCH":"","VERSION":"","DEL_DATCAT_EXT":""}}})
  body: JSON.stringify(req.body)
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});

});

app.post('/emp/login',(req,res)=>{
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_emp_login',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=herHtkgOIIsqr6zh419WFonfG4WRegF-Y2kA_SAP9gtZiCTK8FsM16zIIpH0IVM-; JSESSIONMARKID=Sum_YQyj0It2l_I09CoKeTliwnmsWsITobDH5jaQA'
  },
  body: JSON.stringify(req.body)

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});

});

app.post('/emp/det',(req,res)=>{
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_emp_det',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=herHtkgOIIsqr6zh419WFonfG4WRegF-Y2kA_SAP9gtZiCTK8FsM16zIIpH0IVM-; JSESSIONMARKID=Sum_YQyj0It2l_I09CoKeTliwnmsWsITobDH5jaQA'
  },
  body: JSON.stringify(req.body)

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});

});

app.post('/emp/edit',(req,res)=>{
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_emp_edit',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=herHtkgOIIsqr6zh419WFonfG4WRegF-Y2kA_SAP9gtZiCTK8FsM16zIIpH0IVM-; JSESSIONMARKID=Sum_YQyj0It2l_I09CoKeTliwnmsWsITobDH5jaQA'
  },
  body: JSON.stringify(req.body)

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});

});
app.post('/emp/ff',(req,res)=>{
  var request = require('request');
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_emp_ff',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=herHtkgOIIsqr6zh419WFonfG4WRegF-Y2kA_SAP9gtZiCTK8FsM16zIIpH0IVM-; JSESSIONMARKID=Sum_YQyj0It2l_I09CoKeTliwnmsWsITobDH5jaQA'
    },
    // body: JSON.stringify({"PERNR":""})
    body: JSON.stringify(req.body)

  
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(JSON.parse(response.body));
  });
  
});

app.post('/emp/leave/list',(req,res)=>{
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_emp_leave_list',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=herHtkgOIIsqr6zh419WFonfG4WRegF-Y2kA_SAP9gtZiCTK8FsM16zIIpH0IVM-; JSESSIONMARKID=Sum_YQyj0It2l_I09CoKeTliwnmsWsITobDH5jaQA'
  },
  body: JSON.stringify(req.body)

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});

});

app.post('/emp/leave/quota',(req,res)=>{
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_emp_leave_quota',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=herHtkgOIIsqr6zh419WFonfG4WRegF-Y2kA_SAP9gtZiCTK8FsM16zIIpH0IVM-; JSESSIONMARKID=Sum_YQyj0It2l_I09CoKeTliwnmsWsITobDH5jaQA'
  },
  // body: JSON.stringify({"PERNR":""})
  body: JSON.stringify(req.body)

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});

});

app.post('/emp/leave/req',(req,res)=>{
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_emp_leave_req',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=herHtkgOIIsqr6zh419WFonfG4WRegF-Y2kA_SAP9gtZiCTK8FsM16zIIpH0IVM-; JSESSIONMARKID=Sum_YQyj0It2l_I09CoKeTliwnmsWsITobDH5jaQA'
  },
  // body: JSON.stringify({"END_DATE":"","LEAVE_TYPE":"","PERNR":"","START_DATE":""})
  body: JSON.stringify(req.body)

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});

});

app.post('/emp/payroll',(req,res)=>{
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_emp_payroll',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=herHtkgOIIsqr6zh419WFonfG4WRegF-Y2kA_SAP9gtZiCTK8FsM16zIIpH0IVM-; JSESSIONMARKID=p9Pk1QdRga9yYKdFRO5upb3uKycO3rxi7YEH5jaQA'
  },
  // body: JSON.stringify({"FROMDATE":"","PERNR":"","TODATE":""})
  body: JSON.stringify(req.body)


};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});

});

app.post("/emp/payslip",(req,res)=>{
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_emp_payslip_det',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=7iJhz3R1fzaQJzS7BIiMH4QZw9aeegF-Y2kA_SAPt2UbtZ6jgHQ_KnTa3KJNT2qW; JSESSIONMARKID=k89i3wJU7cyE_p8fRNEgVuc4mDQOpTD2hW135jaQA'
  },
  // body: JSON.stringify({"PERNR":"5016","SEQ":"0001","VARIANT":"RAMACO_PAYSLIP"})
  body: JSON.stringify(req.body)

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});

})

app.post('emp/perf',(req,res)=>{
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_emp_perf',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=herHtkgOIIsqr6zh419WFonfG4WRegF-Y2kA_SAP9gtZiCTK8FsM16zIIpH0IVM-; JSESSIONMARKID=p9Pk1QdRga9yYKdFRO5upb3uKycO3rxi7YEH5jaQA'
  },
  // body: JSON.stringify({"PERNR":""})
  body: JSON.stringify(req.body)

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});

});

app.post('/emp/perf/list',(req,res)=>{
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_emp_perf_list',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=herHtkgOIIsqr6zh419WFonfG4WRegF-Y2kA_SAP9gtZiCTK8FsM16zIIpH0IVM-; JSESSIONMARKID=p9Pk1QdRga9yYKdFRO5upb3uKycO3rxi7YEH5jaQA'
  },
  // body: JSON.stringify({"PERNR":""})
  body: JSON.stringify(req.body)

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});

});

app.post('/emp/proj/det',(req,res)=>{
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_emp_proj_det',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=herHtkgOIIsqr6zh419WFonfG4WRegF-Y2kA_SAP9gtZiCTK8FsM16zIIpH0IVM-; JSESSIONMARKID=p9Pk1QdRga9yYKdFRO5upb3uKycO3rxi7YEH5jaQA'
  },
  // body: JSON.stringify({"WBS":""})
  body: JSON.stringify(req.body)

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});

});

app.post('/emp/proj/list',(req,res)=>{
  var request = require('request');
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_emp_proj_list',
    'headers': {
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Content-Type': 'application/json',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=J8V1qr25okvG-joRuE6NoQnD1rOWegF-Y2kA_SAP31tzSW9tCdLobJbekslLDnVL; JSESSIONMARKID=3O_NYwBtXKp3mwu4xFQtM6eZuvz0I7cwKsXX5jaQA'
    },
    // body: JSON.stringify({"PERNR":"6"})
    body: JSON.stringify(req.body)
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.json(JSON.parse(response.body));
  });
  
  
});

app.post('/emp/basicpay',(req,res)=>{
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/rach_emp_basicpay',
  'headers': {
    'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=J8V1qr25okvG-joRuE6NoQnD1rOWegF-Y2kA_SAP31tzSW9tCdLobJbekslLDnVL; JSESSIONMARKID=3O_NYwBtXKp3mwu4xFQtM6eZuvz0I7cwKsXX5jaQA'
  },
  // body: JSON.stringify({"PERNR":""})
  body: JSON.stringify(req.body)

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.json(JSON.parse(response.body));
});
});