import './loadEnv.js';

import express from 'express';
import compression from 'compression';

//import houseCleanRouter from '../houseClean/router/houseClean.js';

global.production = false;
if (process.env.NODE_ENV === "production") {global.production = true}

export const startListener = async (port = process.env.PORT) => {

    const app = express();

    app.set('view engine', 'ejs');

    await new Promise((resolve, reject) => {
        const server = app.listen(port, (error) => {
            console.log('port', port);
            if (error) {
                return reject(error);
            }
            if (process.env.NODE_ENV == "development") {
                console.log(`Main listener running on port ${port} && tested with Node v.20.13.1`);
            }
            resolve(server);
        });
    });
    
    app.use(express.json());
    app.set('x-powered-by', false);
    app.set('trust proxy', true);
    app.use(compression());
    app.use(express.static('public')); 
    app.use(express.urlencoded( { extended: true } ));

    // app.get('/', (req, res) => { res.redirect(`/houseClean`);});

    // app.use('/houseClean', houseCleanRouter);

}