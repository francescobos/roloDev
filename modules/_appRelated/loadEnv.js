import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));
import { config } from 'dotenv';
config( {path: join(__dirname, '../../', '.env')} );