/* eslint no-restricted-modules: [2, ""] */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');

const { geocode } = require('./controllers');

module.exports = (app, config) => {
    app.use(express.static(config.rootPath)); // Serve public files from static directory
    app.use(bodyParser.urlencoded({ extended: false })); // to support URL-encoded bodies
    app.use(bodyParser.json());               // to support JSON-encoded bodies
    app.use(compression());
    app.use('*', function(req, res, next) {   // LOGGING
        console.info('request: ', req.method, ' ', req.protocol, ' ', req.hostname, ' ', decodeURIComponent(req.originalUrl));
        next();
    });

    // ROUTING
    app.get('/api/getGeocoder', geocode);

    // handle every other route to React JS
    app.all('*', function(req, res) {
        console.info('* redirect to React: ', req.originalUrl);
        res.sendFile(path.join(config.rootPath, config.clientEntryPoint));
    });
};
