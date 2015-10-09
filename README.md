
Code for both Device and Appication.

Device wil send a simulated temperature data to Bluemix Dashboard.

Application on my laptop will wait for data from Device.

If Device sends >10 - then application will send a "Critical" message back to Device.
If Device sends <10 - then application will send a "safe" message back to Device.


Device is configured to pin 11 - to turn a LED on / off.

