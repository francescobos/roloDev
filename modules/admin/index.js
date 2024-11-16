import '../_appRelated/loadEnv.js';

import express from 'express';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import { Sequelize, DataTypes } from 'sequelize';
import AdminJSSequelize from '@adminjs/sequelize';
import bcrypt from 'bcrypt';

import { sequelize } from '../../config/dbConfig.js';

import { Company, Contact } from './viewConfig.js';

AdminJS.registerAdapter(AdminJSSequelize);

const app = express();

import { models } from "../../models/index.js";

// Configura AdminJS
const adminJS = new AdminJS({
    databases: [sequelize],
    rootPath: '/admin',
    resources: [
        Company,
        Contact,
    ]
});

const ADMIN = {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
};

// Configura il middleware di autenticazione
const authenticate = async (email, password) => {
    if (email === ADMIN.email && password === ADMIN.password) {
        return Promise.resolve({ email });
    }
    return null;
};

// mette la password solo con env in produzione
// questa è il router senza auth
let router = AdminJSExpress.buildRouter(adminJS);

// questo il router con auth
if (process.env.NODE_ENV === 'production') {
    router = AdminJSExpress.buildAuthenticatedRouter(
        adminJS,
        {
            authenticate,
            cookiePassword: '7few76gc7weg76eg7esgcey33ywd42tg', // salt for password
        },
        null,
        {
            resave: false,
            saveUninitialized: true,
        }
    );
}

app.use(adminJS.options.rootPath, router);

// Avvia il server
export const runAdmin = async () => {
    app.listen(process.env.ADMIN_PORT, () => console.log(`AdminJS is running on port ${process.env.ADMIN_PORT}`));
}