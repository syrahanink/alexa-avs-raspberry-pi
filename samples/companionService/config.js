/**
 * @module
 * This module defines the settings that need to be configured for a new
 * environment.
 * The clientId and clientSecret are provided when you create
 * a new security profile in Login with Amazon.  
 * 
 * You will also need to specify
 * the redirect url under allowed settings as the return url that LWA
 * will call back to with the authorization code.  The authresponse endpoint
 * is setup in app.js, and should not be changed.  
 * 
 * lwaRedirectHost and lwaApiHost are setup for login with Amazon, and you should
 * not need to modify those elements.
 */
var config = {
    clientId: 'amzn1.application-oa2-client.be0e69d185a14d12b9a44bb370db2509',
    clientSecret: '25803ff158a7b374336dc47ecaf77022915046d77064fb3b651370e7c73fa3c1',
    redirectUrl: 'https://localhost:3000/authresponse',
    lwaRedirectHost: 'amazon.com',
    lwaApiHost: 'api.amazon.com',
    validateCertChain: true,
    sslKey: '/home/pi/alexa-avs-raspberry-pi/samples/javaclient/certs/server/node.key',
    sslCert: '/home/pi/alexa-avs-raspberry-pi/samples/javaclient/certs/server/node.crt',
    sslCaCert: '/home/pi/alexa-avs-raspberry-pi/samples/javaclient/certs/ca/ca.crt',
    products: {
        "AlexaPi": ["123456"], // Fill in with valid device values, eg: "testdevice1": ["DSN1234", "DSN5678"]
    },
};

module.exports = config;
