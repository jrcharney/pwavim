//const express = require('express');
import express from "express";
import process from "node:process";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require('./routes/htmlRoutes')(app);
import htmlRoutes from './routes/htmlRoutes.js';
htmlRoutes(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
