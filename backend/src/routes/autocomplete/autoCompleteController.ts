import {RequestHandler} from "express";
import axios from "axios";

export const getPlaceAutocomplete: RequestHandler = async (req, res) => {
    console.log(process.env.GOOGLE_MAPS_API_KEY);
    const input = req.query.input;
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${apiKey}`;
    const response = await axios.get(url);
    console.log(response)
    res.json(response.data);
}