import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();  // Esto carga las variables del archivo .env

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const envVariables = {
    PUBLIC_EMAILJS_USER_ID: process.env.PUBLIC_EMAILJS_USER_ID,
    PUBLIC_EMAILJS_SERVICE_ID: process.env.PUBLIC_EMAILJS_SERVICE_ID,
    PUBLIC_EMAILJS_TEMPLATE_ID: process.env.PUBLIC_EMAILJS_TEMPLATE_ID,
};

// Ruta del archivo generado por Astro
const filePath = path.join(__dirname, 'dist/_astro/index.CUU9BdRD.js'); // Ajusta la ruta si es necesario

// Leer el archivo
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    // Reemplazar las variables de entorno en el contenido del archivo
    let updatedData = data;
    Object.entries(envVariables).forEach(([key, value]) => {
        if (value) {
            const regex = new RegExp(`{{${key}}}`, 'g');
            updatedData = updatedData.replace(regex, value);
        } else {
            console.warn(`La variable de entorno ${key} no está definida.`);
        }
    });

    // Escribir el archivo actualizado
    fs.writeFile(filePath, updatedData, 'utf-8', (err) => {
        if (err) {
            console.error('Error al escribir en el archivo:', err);
            return;
        }
        console.log('Archivo actualizado con las variables de entorno.');
    });
});
