'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV  = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
    throw err;
});

// Ensure environment variables are read.
require('../config/env');

const fs                    = require('fs');
const chalk                 = require('chalk');
const webpack               = require('webpack');
const WebpackDevServer      = require('webpack-dev-server');
const clearConsole          = require('react-dev-utils/clearConsole');
const checkRequiredFiles    = require('react-dev-utils/checkRequiredFiles');
const openBrowser           = require('react-dev-utils/openBrowser');
const paths                 = require('../config/paths');
const config                = require('../config/webpack.config.dev');
const createDevServerConfig = require('../config/webpackDevServer.config');
const useYarn               = fs.existsSync(paths.yarnLockFile);
const isInteractive         = process.stdout.isTTY;
const {
    choosePort,
    createCompiler,
    prepareProxy,
    prepareUrls
} = require('react-dev-utils/WebpackDevServerUtils');

// Warn and crash if required files are missing
if (!checkRequiredFiles([ aths.appHtml, paths.appIndexJs ])) process.exit(1);

// Tools like Cloud9 rely on this.
const PREDEFINED_PORT = 8080;
const DEFAULT_PORT    = parseInt(process.env.PORT, 10) || PREDEFINED_PORT;
const HOST            = process.env.HOST || '0.0.0.0';

// We attempt to use the default port but if it is busy, we offer the user to
// run on a different port. `detect()` Promise resolves to the next free port.
choosePort(HOST, DEFAULT_PORT)
    .then(port => {
        if (port === null) {
            // We have not found a port.
            return;
        }

        const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
        const appName  = require(paths.appPackageJson).name;
        const urls     = prepareUrls(protocol, HOST, port);

        // Create a webpack compiler that is configured with custom messages.
        const compiler = createCompiler(webpack, config, appName, urls, useYarn);

        // Load proxy config
        const proxySetting = require(paths.appPackageJson).proxy;
        const proxyConfig  = prepareProxy(proxySetting, paths.appPublic);

        // Serve webpack assets generated by the compiler over a web sever.
        const serverConfig = createDevServerConfig(proxyConfig, urls.lanUrlForConfig);
        const devServer    = new WebpackDevServer(compiler, serverConfig);

        // Launch WebpackDevServer.
        devServer.listen(port, HOST, err => {
            if (err) console.log(err);
            if (isInteractive) clearConsole();

            console.log(chalk.cyan('Starting the development server...\n'));

            openBrowser(urls.localUrlForBrowser);
        });

        [ 'SIGINT', 'SIGTERM' ].forEach(signal => {
            process.on(signal, function () {
                devServer.close();
                process.exit();
            });
        });
    })
    .catch(error => {
        if (error && error.message) console.error(error.message);

        process.exit(1);
    });
