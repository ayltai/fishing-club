'use strict';

const express = require('express');
const app     = express();

app.use(express.static('.'));

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;

const server = app.listen(DEFAULT_PORT, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.info('App listening at https://' + host + ':' + port);
});
