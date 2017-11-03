// src/server.js
 
import path from "path";
import {createExpressServer} from "create-react-server";
import app from "./app";
 
createExpressServer({
    port: process.env.PORT || 45649,
    app: app,
    template: ({template, html, req}) => (
        template.replace(
            `<div id="root"></div>`,
            `<div id="root">${html}</div>`)),
    outputPath: path.join(process.cwd(), 'build')
});