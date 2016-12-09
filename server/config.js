module.exports = (() => {
    'use strict';

    return {
        // Service api URIs prefix
        apiPrefixUri: '/api/v1',
        // Twilio Credentials
        accountSid: '{{ YOUR_ACCOUNT_SID_HERE }}',
        authToken: '{{ YOUR_AUTH_TOKEN_HERE }}',
        devicePhoneNumber: '{{ YOUR_TWILIO_NUMBER_HERE }}',
        // Commands API
        device: '{{ YOUR_DEVICE_NAME_HERE }}',
    };
})();