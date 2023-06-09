import autoCompleteRouter from "./routes/autocomplete/autoCompleteRouter.js";
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import weatherRouter from "./routes/weather/weatherRouter";

const app = express();

app.use(express.json());
app.use(morgan('combined'))
app.use(cors());

app.use('/weather', weatherRouter);
app.use('/autocomplete', autoCompleteRouter);

export default app;