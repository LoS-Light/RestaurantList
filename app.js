import express from 'express';
import cors from 'cors';
import { MainRouter } from './routers/main.router.js';

const port = 3000;
const prefix = "/v1";
const configCors = { origin: ['http://localhost:5500'] }    // Dev only Domain

const app = express();
app.use(cors(configCors));
app.use(prefix, MainRouter);    // Set main router with global prefix

app.listen(port, () => console.log(`-> Listening on ${port}`));