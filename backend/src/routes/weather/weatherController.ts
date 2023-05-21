import {RequestHandler} from "express";
import axios from "axios";

export const getCityWeather: RequestHandler = async (req, res) => {
    const {selectedLocation} = req.body;
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=beb95d7e8a454fcbabf234925232904&q=${selectedLocation}`);
    res.status(200).json(response.data);
}