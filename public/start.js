'use strict';

const express     = require('express');
const compression = require('compression');
const app         = express();

app.use(compression());
app.use(express.static('.'));

const PREDEFINED_PORT = 80;
const DEFAULT_PORT    = parseInt(process.env.PORT, 10) || PREDEFINED_PORT;

const server = app.listen(DEFAULT_PORT, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.info(`App listening at https://${host}:${port}`);
});
