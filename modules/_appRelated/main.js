import './loadEnv.js'

// import { dbSync } from './dbSync.js';
// import { prepareDir } from './utils.js';
import { startListener } from './listener.js';
import { avvioApp } from '../hashManager/main.js';

export const startApp = async () => {
    try {

        // await prepareDir();
        // await dbSync();

        await startListener();
        avvioApp(process.env.PATH_TO_WATCH);

    } catch (error) {
        console.log('Error in avvioApp', error);    
    }
}