import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfig.js";

import { v4 as uuidv4 } from 'uuid';

const Contact = sequelize.define('Contact', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, 
    autoIncrement: true,
    allowNull: false
  },
  uuid: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    defaultValue: uuidv4(),
    validate: {
      isUUID: 4
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true
  },
  role: {
    type: DataTypes.STRING,
    allowNull: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: true
  }, 
  phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  photo: {
    type: DataTypes.STRING,  // Questo campo conterrà il percorso dell'immagine
    allowNull: true,
  }
}, {
  tableName: 'contacts',
});

const Company = sequelize.define('Company', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  uuid: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isUUID: 4
    }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  postal_code: {
    type: DataTypes.STRING,
    allowNull: true
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true
  },
  city_province: {
    type: DataTypes.STRING,
    allowNull: true
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true
  },
  vat_number: { 
    type: DataTypes.STRING,
    allowNull: true,
  },
  company_slug: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  company_phone: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'companies'
});

// Un contatto può essere associato a più aziende e viceversa
const CompanyContact = sequelize.define('CompanyContact', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  companyId: {
    type: DataTypes.INTEGER,
    references: {
      model: Company,
      key: 'id'
    }
  },
  contactId: {
    type: DataTypes.INTEGER,
    references: {
      model: Contact,
      key: 'id'
    }
  },
  role: { // attributo aggiuntivo per indicare un eventuale ruolo nella relazione
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'company_contacts'
});

const Note = sequelize.define('Note', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  uuid: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    defaultValue: uuidv4(),
    validate: {
      isUUID: 4
    }
  },
  contactId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'contacts', // Nome della tabella a cui si riferisce
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  noteContent: {
    type: DataTypes.TEXT, // Supporta testo lungo in formato Markdown
    allowNull: false,
  },
  registrationDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  photoDirectory: {
    type: DataTypes.STRING, // Directory per foto collegate alla nota
    allowNull: true,
  }
}, {
  tableName: 'notes',
});

// Definizione delle relazioni molti a molti
Company.belongsToMany(Contact, { through: CompanyContact, foreignKey: 'companyId' });
Contact.belongsToMany(Company, { through: CompanyContact, foreignKey: 'contactId' });

// Definisce la relazione uno-a-molti
Contact.hasMany(Note, {
  foreignKey: 'contactId',
  as: 'notes', // Alias per accedere alle note di un contatto
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE'
});

Note.belongsTo(Contact, {
  foreignKey: 'contactId',
  as: 'contact', // Alias per accedere al contatto associato a una nota
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE'
});

export { Company, Contact, CompanyContact, Note };