function login_options(user, pass) {
  return {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_RACHEL_PORTAL&receiverParty=&receiverService=&interface=SI_CUST_LOGIN_RC&interfaceNamespace=https://customer_login_rc.com',
    'headers': {
      'Content-Type': 'text/xml',
      'SOAPAction': '"http://sap.com/xi/WebService/soap1.1"',
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA1wb3J0YWw6UE9VU0VSiAAHZGVmYXVsdAEABlBPVVNFUgIAAzAwMAMAA0tQTwQADDIwMjEwNTEzMTc0NgUABAAAAAgKAAZQT1VTRVL%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjEwNTEzMTc0NjQzWjAjBgkqhkiG9w0BCQQxFgQUv9ftwkmhlabUqFH473WtmPjEmoMwCQYHKoZIzjgEAwQwMC4CFQCjC3RfUcKLGKN%2F5XD0CYhoB2LdDwIVANLjBIl8AB5x6nIQMOo0TTIPu!DO; saplb_*=(J2EE6906720)6906750; JSESSIONID=1LWKU2LrVsac8k4XCJGXd0_6fdZmeQF-Y2kA_SAPLrc984e_mpjjE2k5tdJ0jEgG; JSESSIONMARKID=dkmUNQZN49VZf4NHU9xJ8JJ9J-T08WxzlbP35jaQA'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_CUST_LOGIN_RC>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <PASSWORD>' + pass + '</PASSWORD>\r\n         <USERNAME>' + user + '</USERNAME>\r\n      </urn:ZBAPI_CUST_LOGIN_RC>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'

  };
}

function customer_details(obj) {
  cus_id = obj.cus_id;
  var request = require('request');
  return {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_RACHEL_PORTAL&receiverParty=&receiverService=&interface=SI_CUST_DETAILS_RC&interfaceNamespace=https://customer_details.com',
    'headers': {
      'SOAPAction': '"http://sap.com/xi/WebService/soap1.1"',
      'Content-Type': 'text/xml',
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=56e09YMNHF62LtQlKQPC01ZePXdueQF-Y2kA_SAP1CGenkflZYSxQRe7qbWw2lvV; MYSAPSSO2=AjExMDAgAA1wb3J0YWw6UE9VU0VSiAAHZGVmYXVsdAEABlBPVVNFUgIAAzAwMAMAA0tQTwQADDIwMjEwNTE1MTczNAUABAAAAAgKAAZQT1VTRVL%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjEwNTE1MTczNDUwWjAjBgkqhkiG9w0BCQQxFgQU3Kd2rpksg12LDIH0PYd3z5D4kdYwCQYHKoZIzjgEAwQwMC4CFQCW5lynswALrh22z!RGb75hJERz!AIVAICedxVOz%2FIH5L09TMtPF3%2FcMZeu; JSESSIONMARKID=JVfc9ApHepx78OwQsMEwQh47BEXO6hQkPe4H5jaQA'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_CUST_DETAILS_RC>\r\n         <CUSTOMER_ID>'+ cus_id+'</CUSTOMER_ID>\r\n      </urn:ZBAPI_CUST_DETAILS_RC>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'

  };

}

function customer_edit_options(obj) {
  cus_id = obj.cus_id
  name1 = obj.name1;
  name2 = obj.name2;
  country = obj.country;
  city = obj.city;
  postal_code = obj.postal_code;
  state = obj.state;
  search = obj.search;
  street = obj.street;
  tel = obj.tel;
  fax = obj.fax;
  ota = obj.ota;
  address = obj.address;
  return {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_RACHEL_PORTAL&receiverParty=&receiverService=&interface=SI_CUST_EDIT_RC&interfaceNamespace=https://customer_profile_edit.com',
    'headers': {
      'SOAPAction': '"http://sap.com/xi/WebService/soap1.1"',
      'Content-Type': 'text/xml',
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Cookie': 'saplb_*=(J2EE6906720)6906750; JSESSIONID=56e09YMNHF62LtQlKQPC01ZePXdueQF-Y2kA_SAP1CGenkflZYSxQRe7qbWw2lvV; MYSAPSSO2=AjExMDAgAA1wb3J0YWw6UE9VU0VSiAAHZGVmYXVsdAEABlBPVVNFUgIAAzAwMAMAA0tQTwQADDIwMjEwNTE1MTczNAUABAAAAAgKAAZQT1VTRVL%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjEwNTE1MTczNDUwWjAjBgkqhkiG9w0BCQQxFgQU3Kd2rpksg12LDIH0PYd3z5D4kdYwCQYHKoZIzjgEAwQwMC4CFQCW5lynswALrh22z!RGb75hJERz!AIVAICedxVOz%2FIH5L09TMtPF3%2FcMZeu; JSESSIONMARKID=8cQeMw6-L2LOxLS99F0FYxo10zZ5ImnnUX235jaQA'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_CUST_EDIT_RC>\r\n         <!--You may enter the following 13 items in any order-->\r\n         <!--Optional:-->\r\n         <ADDRESS>' + address + '</ADDRESS>\r\n         <!--Optional:-->\r\n         <CITY>' + city + '</CITY>\r\n         <!--Optional:-->\r\n         <COUNTRY>' + country + '</COUNTRY>\r\n         <CUSTOMER_ID>' + cus_id + '</CUSTOMER_ID>\r\n         <!--Optional:-->\r\n         <FAX_NUMBER>' + fax + '</FAX_NUMBER>\r\n         <!--Optional:-->\r\n         <NAME>' + name1 + '</NAME>\r\n         <!--Optional:-->\r\n         <NAME_2>' + name2 + '</NAME_2>\r\n         <!--Optional:-->\r\n         <ONE_TIME_ACC>' + ota + '</ONE_TIME_ACC>\r\n         <!--Optional:-->\r\n         <POSTAL_CODE>' + postal_code + '</POSTAL_CODE>\r\n         <!--Optional:-->\r\n         <SEARCH_TERM>' + search + '</SEARCH_TERM>\r\n         <!--Optional:-->\r\n         <STATE>' + state + '</STATE>\r\n         <!--Optional:-->\r\n         <STREET>' + street + '</STREET>\r\n         <!--Optional:-->\r\n         <TELEPHONE>' + tel + '</TELEPHONE>\r\n      </urn:ZBAPI_CUST_EDIT_RC>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>'

  };
}

module.exports = { login_options, customer_details, customer_edit_options };