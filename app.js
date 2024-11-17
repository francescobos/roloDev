//import { runAdmin } from "./modules/admin/index.js";
import { dbSync } from "./modules/_appRelated/dbSync.js";
import { startListener } from "./modules/_appRelated/listener.js";

await dbSync();
//runAdmin();
startListener();