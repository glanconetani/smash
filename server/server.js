import React from 'react';
import { StaticRouter } from 'react-router-dom';
import App from '../client/src/App.js';
import { renderToString } from "react-dom/server";

var path = require("path");
var express = require("express");
var serialize = require("serialize-javascript");
//var db = require('./db');

const PORT = process.env.HTTP_PORT || 4001;
const app = express();
app.use('/static', express.static(path.join(__dirname, 'public')));
console.log(__dirname);
const characters = {};

app.get('/*', function(req, res) {
  const context = {};


  const component = (
      <StaticRouter location={req.url} context={context}>
        <App characters={characters}/>
      </StaticRouter>
  );
  const ss_react = renderToString(component);

  res.writeHead( 200, { "Content-Type": "text/html" });
  res.end(htmlTemplate(component));
})

function htmlTemplate(component) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>

        <body>
            <div id="root">${component}</div>
            <script>window.__INITIAL_DATA__ = ${serialize(characters)}</script>
            <script src="./static/index.js"></script>
            <script src="./static/vendors~index.js"></script>
        </body>
        </html>
    `;
}


app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});
