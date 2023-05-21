import express from "express";
import {getPlaceAutocomplete} from "./autoCompleteController.js";

const autoCompleteRouter = express.Router();

autoCompleteRouter
    .get('/', getPlaceAutocomplete);

export default autoCompleteRouter;