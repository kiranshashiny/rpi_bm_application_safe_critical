var Client = require("ibmiotf").IotfApplication;

var config = Client.parseConfigFile("iotf.cfg");
var applicaton = new Client(config);


var deviceType  = "iotdevice";
var deviceId = "b827eb984666";
console.log (" The device Type is " + deviceType + " Device id = "+ deviceId );
applicaton.connect();
// here I am subscribing to all events.
applicaton.on("connect", function () {

/*
        setInterval(function function_name (argument) {
                payload = '{ "numOfTimes" : 23 }';

                applicaton.publishDeviceCommand(deviceType, deviceId, "blink", "json",payload);

        }, 2000);
*/

    applicaton.subscribeToDeviceEvents();
    applicaton.subscribeToDeviceStatus();

});

// this is for handling events.

applicaton.on("deviceEvent", function (deviceType, deviceId, eventType, format, payload) {

    console.log("Device Event from :: "+deviceType+" : "+deviceId+" of event "+eventType+" with payload : "+payload);
    var json = JSON.parse(payload);
    console.log ("temperature is " +json.d.temp );

    if ( json.d.temp > 10) { 
		console.log ("since temp is > 10, CRITICAL ");
                //payload = '{ "numOfTimes" : 1 }';
                //applicaton.publishDeviceCommand(deviceType, deviceId, "blink", "json",payload);

                payload ="critical";
		console.log ("sending payload " + payload );
                applicaton.publishDeviceCommand(deviceType, deviceId, "blink", "string",payload);

    } else {
		console.log ("since temp is < 10, SAFE");
                //payload = '{ "numOfTimes" : 0 }';
                //applicaton.publishDeviceCommand(deviceType, deviceId, "blink", "json",payload);

                payload = "safe"
		console.log ("sending payload " + payload );
                applicaton.publishDeviceCommand(deviceType, deviceId, "blink", "string",payload);


    }
});

applicaton.on("deviceStatus", function (deviceType, deviceId, payload, topic) {

    console.log("Device status from :: "+deviceType+" : "+deviceId+" with payload : "+payload);

});

