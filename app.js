// const express = require('express') -> import express from "express";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const handleHome = (req, res) => res.send("Hello frome home");
 //다시 찾아보기

// function handleProfile(req, res) {
//     res.send("You are on my profile")
// }    Same with no.17

const handleProfile = (req, res) => res.send("You are on my profile")

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);



export default app;