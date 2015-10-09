

Turning LED on and OFF based on simulated temperature received from the Raspberry Pi.
====================================================================================
Code for both Device and Application is stored here.

Device wil send a simulated temperature data to Bluemix Dashboard.

Bluemix Dashboard will retain the data ( can be seen thru visualization)

Node.js Application on my laptop will wait for data from Device.

If Device sends >10 - then application will send back a "Critical" message to Device. <br>

If Device sends <10 - then application will send back a "safe" message to Device.

Device is configured to Pin 11 - to turn a LED on / off.

e.g: C code =  pinMode(PIN11,OUTPUT);


Application code is in JS.
Device code is in C.

