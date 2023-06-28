import express from 'express';
import { MainRouter } from './routers/main.router.js';

const port = process.env.PORT || 3000;
const prefix = '/v1';
const staticRes = 'web';

const app = express();
app.use(express.static(staticRes));     // My web site
app.use(prefix, MainRouter);        // Set api main router with global prefix

app.listen(port, () => console.log(`-> Listening on ${port}`));