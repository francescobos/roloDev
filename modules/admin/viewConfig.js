// icons https://mui.com/material-ui/material-icons/ icone comuni adminJS Dashboard User Group Settings Category Database Inbox Notifications Cloud Lock
import req from "express/lib/request.js";
import { models } from "../../models/index.js";


import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));

import uploadFeature from '@adminjs/upload';

const groupOneNavigation = {
  name: 'RoloDev',
  icon: 'Database',
};

// const groupTwoNavigation = {
//   name: 'Azure Data',
//   icon: 'Database',
// };

export const System = { // nasconde la tabella delle configurazioni di sistema
  resource: models.System,
  options: {
    navigation: false,
  },
};

export const Company = {
  resource: models.Company,
  options: {
    perPage: 100
  },
};

export const Contact = {
  resource: models.Contact,
  options: {
    properties: {
      uuid: {
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
      name: { position: 1 },
      surname: { position: 2 },
      role: { position: 3 },
      email: { position: 4 },
      phone: { position: 5 },
    },
    perPage: 100
  },
  features: [
    uploadFeature({
      provider: { local: { bucket: join(__dirname, 'uploads') } },
      properties: {
        key: 'photo',        // Campo dove salvare il percorso dell'immagine
        filePath: 'photoPath', // Campo virtuale per il percorso dell’immagine
        file: 'photo',        // Campo nel form di AdminJS per il caricamento
      },
      validation: { mimeTypes: ['image/png', 'image/jpeg', 'image/jpg'] },
    }),
  ],
};