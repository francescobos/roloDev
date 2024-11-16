import { runAdmin } from "./modules/admin/index.js";
import { dbSync } from "./modules/_appRelated/dbSync.js";

await dbSync();
runAdmin();