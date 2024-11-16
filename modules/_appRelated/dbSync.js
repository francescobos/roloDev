import '../_appRelated/loadEnv.js';

import { sequelize } from '../../config/dbConfig.js';
import { models } from '../../models/index.js';

let dataReset = false;
if (process.env.DATA_RESET === 'true') { dataReset = true; }

export const dbSync = async () => {

    try {
        await sequelize.sync({ force: dataReset });
        if (dataReset) { 
            /* seeding initial data. Si tratta di un import dinamico. Importo solo se serve, altrimenti non lo carico */
            //const { seeding } = await import('../../modules/seeding/initalData/insertInitialData.js');
            //console.log(await seeding());
        }
    } catch (error) {
        console.error("Errore durante la sincronizzazione del database:", error);
        process.exit(1);
    }
}