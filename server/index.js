'use strict';

const express       = require('express'),
      app           = express(),
      bodyParser    = require('body-parser'),
      _             = require('lodash'),
      commands      = require('./commands.js'),
      config        = require('./config.js');

app.use(bodyParser.urlencoded({extended: true}));
app.set('port', (process.env.PORT || 5000));

app.post(config.apiPrefixUri + '/callback', (req, res) => {
    if (_.isEmpty(req.body)) {
        res.sendStatus(204);
        return;
    }
    
    let body = req.body.Command;
    let pos = body.search('#-');
    let to = body.substring(0, body.search('#-'));
    let msg = body.substr(pos + 2);

    commands.sendSMS(to, msg);
    res.sendStatus(200);
});

app.post(config.apiPrefixUri + '/sms', (req, res) => {
    if (_.isEmpty(req.body)) {
        res.sendStatus(204);
        return;
    }
    
    let body = `-#${req.body.From}#-${req.body.Body}`;
    commands.sendCommand(body);
});

app.listen(app.get('port'), () => {
    console.log(`${app.get('port')}: listening...`);
});
