/* eslint-disable no-process-env */
/* eslint no-restricted-modules: [2, ""] */

const express = require('express');
const app = express();
const path = require('path');

const config = {
    rootPath: path.join(__dirname, '/public'),
    port: process.env.PORT || 9090,
    clientEntryPoint: '/index.html'
};

require('./server/express')(app, config);

app.listen(config.port, function() {
    console.info('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});
