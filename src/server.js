// src/server.js
import Express from "express";
var app = Express();

app.use('/', express.static(__dirname))
app.listen(45649, function() {
	console.log("Listening");
})

 /*
import path from "path";
import {createExpressServer} from "create-react-server";
import app from "./app";
 
console.log("In SErver.js");

createExpressServer({
    port: process.env.PORT || 45649,
    app: app,
    template: ({template, html, req}) => (
        template.replace(
            `<div id="root"></div>`,
            `<div id="root">${html}</div>`)),
    outputPath: path.join(process.cwd(), 'build')
});
*/