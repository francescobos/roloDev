import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { promises as fs } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const _checkOrCreateDir = async (dirPath) => {
    return new Promise(async (resolve, reject) => {
  
      try {
          await fs.access(dirPath);
          /* non può fallire questa promise o crea o non crea*/
          resolve("Directory already exists "+ dirPath);
          }   
      catch (error) {
          await fs.mkdir(dirPath, { recursive: true });
          resolve();
      }
    });
}

export const prepareDir = async () => {
    try {

        await _checkOrCreateDir(join(__dirname,'../../data'));
        await _checkOrCreateDir(join(__dirname,'../../data/tmp'));

    } catch (error) {
        console.log(error)
    }
}

export const calculateRandomDateInPast = (days) => {
    const randomDaysAgo = Math.floor(Math.random() * days);
    const date = new Date();
    date.setDate(date.getDate() - randomDaysAgo);
    return date;
};