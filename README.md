# Bi-Directional SMS Delivery With Twilio Programmable Wireless

Use Twilio's Programmable SMS to send a [Command](https://www.twilio.com/docs/api/wireless/rest-api/command) by Programmable Wireless to an [Ardunio](https://www.sparkfun.com/arduino_guide) device asking for it's current location then receive the location back by SMS.

**Looking access to Twilio Programmable Wireless? Fill out the developer preview early access [form](https://www.twilio.com/console/form/wireless-access).**

## What is the Command resource?
The Command resource enables you to exchange simple machine-to-machine messages with SMS-capable Devices. For example, you could use a Command to tell an idle Device to enable its data capabilities and establish an IP session.

SMS is used as the transport but the Device does not require an addressable phone number to receive a Command. This is a major distinction from the Messages resource.

Any SMS message sent from the Device to a predetermined phone number is interpreted as an incoming Command and sent to the Commands Callback Url of the Device.

Commands can be sent and received using the SMS text mode or binary (PDU) mode. Text mode Commands have a maximum length of 100 single-byte characters. Binary mode Commands have a maximum length of 140 bytes.
To process a Command when it reaches your Device, you will interface with the modem directly. From the perspective of the Device, a Command is delivered as a regular SMS message.

## What is the difference between a Command and a Programmable SMS?
Twilio’s Programmable SMS is used to send a text message to a device such as a smartphone. This is one of the most common tasks performed on the Twilio Platform. Twilio’s Programmable Wireless Command resource uses SMS as a transport layer to send mobile-to-mobile messages. This means you cannot use the Command resource to send a text message to a smartphone.

## Requirements
* [Programmable Wireless SIM Card](https://www.twilio.com/console/wireless/sims/)
* [Programmable Phone Number](https://www.twilio.com/phone-numbers)
* [Arduino](https://www.sparkfun.com/arduino_guide) board with GPS and cellular module
* [Arduino IDE](https://www.arduino.cc/en/main/software)
* Server running [Node.js](https://nodejs.org/en/)
	* [Heroku](http://heroku.com/)

# Setup Instructions

### Server
1. Clone or download this repository
2. Open `config.js` with your favorite text editor
3. Update all values with the `{{ YOUR_X_HERE }}` convention
4. See table below
5. Upload code to server

#### Values To Update In config.js

Key | Description
---------- | -----------
accountSid | Consider this your account username. It’s used to authenticate - [get it here.](https://www.twilio.com/console/)
authToken | Consider this your account password. It’s used to authenticate - [get it here.](https://www.twilio.com/console/)
devicePhoneNumber | Used for bidirectional communication with device over SMS - [get one here.](https://www.twilio.com/console/phone-numbers/search)
Device | This is your unique identifier to your IoT device - [register your device here.](https://www.twilio.com/console/wireless/getting-started)

#### Twilio Console
1. Navigate to the Programmable Wireless Devices [page](https://www.twilio.com/console/wireless/devices)
2. Select your newly created device
3. Enter the Callback URL that points to the code you uploaded to your server.
	* Heroku Example: https://YOUR-APP-NAME-HERE.com/api/v1/callback
4. Click Save

### Device
1. Open Arduino IDE
2. Go to File > Open in the Menu
3. Navigate to your local copy of this repository
4. Select `Twilio_Wireless_SMS_Template.ino`
5. Select your Arduino board under Tools in the Menu
6. Select the correct Port under Tools in the Menu
7. Press the Right Arrow Button in Arduino IDE to upload the code
8. Select Serial Monitor under Tools in the Menu
9. Send a SMS with the text: `Where are you?`
10. Wait for response

***That’s it! Now you can send and receive SMS messages with.***

## Resources
* [Programmable Wireless Documentation](https://www.twilio.com/docs/api/wireless)
* [Programmable Wireless Product Page](https://www.twilio.com/wireless)
* [Programmable Wireless Pricing](https://www.twilio.com/wireless/pricing)
