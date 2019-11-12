import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from "react-redux";

import App from '../client/src/App.js';
import { renderToString } from "react-dom/server";
import createStore, { initialize, fetchCharacters } from './store.js';

var path = require("path");
var express = require("express");
var serialize = require("serialize-javascript");
//var db = require('./db');

const PORT = process.env.HTTP_PORT || 4001;
const app = express();
app.use('/static', express.static(path.join(__dirname, 'public')));
console.log(__dirname);

app.get('/*', function (req, res) {
    const context = {};
    const store = createStore();
    store.dispatch(initialize());

    Promise.all([store.dispatch(fetchCharacters())]).then(() => {
        const component = (
            <ReduxProvider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <App />
                </StaticRouter>
            </ReduxProvider>
        );
        const ss_react = renderToString(component);
        const ss_state = store.getState();

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(htmlTemplate(component, ss_state));
    });
});

function htmlTemplate(component, ss_state) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>

        <body>
            <div id="root">${component}</div>
            <script>window.REDUX = ${serialize(ss_state, { isJSON: true })}</script>
            <script src="./static/index.js"></script>
            <script src="./static/vendors~index.js"></script>
        </body>
        </html>
    `;
}


app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}.`);
});
