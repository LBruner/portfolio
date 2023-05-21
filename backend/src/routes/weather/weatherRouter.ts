import express from "express";
import {getCityWeather} from "./weatherController";

const weatherRouter = express.Router();

weatherRouter
    .post('/', getCityWeather);

export default weatherRouter;