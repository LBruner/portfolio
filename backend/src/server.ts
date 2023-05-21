import * as dotenv from "dotenv";
import * as http from "http";
import app from "./app.js";
import path from "path";

const envPath = path.join(__filename, '..', '..', '.env');
dotenv.config({path: envPath});

const PORT = 8080;

const server = http.createServer(app);
const startServer = async () => {
    server.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}...`);
    })
}

startServer()