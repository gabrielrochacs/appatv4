const express = require("express");
const bodyParser = require("body-parser");

const os = require("os");

const app = express();

app.get("/", (req, res) => {
    return res.status(200).json("status: true, message: ok, version: 1.0.0, host: " + os.hostname());
    ;
});

app.get("/liveness", (req, res) => {
    return res.status(200).json({
        status: true,
        path: "",
        gid: "",
        uid: "",
});
;
});

app.get("/readiness", (req, res) => {
    return res.status(200).json(
        {status: true,
            mensagem: "readiness",
            os: os.platform(),
            freenem: os.freemem(),
            homedir: os.homedir(),})
    ;
});


module.exports = app;