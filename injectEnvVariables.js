// import fs from 'fs';
// import path from 'path';
// import dotenv from 'dotenv';
// dotenv.config();  // Esto carga las variables del archivo .env

// const __dirname = path.dirname(new URL(import.meta.url).pathname);

// const envVariables = {
//     PUBLIC_EMAILJS_USER_ID: process.env.PUBLIC_EMAILJS_USER_ID,
//     PUBLIC_EMAILJS_SERVICE_ID: process.env.PUBLIC_EMAILJS_SERVICE_ID,
//     PUBLIC_EMAILJS_TEMPLATE_ID: process.env.PUBLIC_EMAILJS_TEMPLATE_ID,
// };

// // Ruta del archivo generado por Astro
// const filePath = path.join(__dirname, 'dist/_astro/index.CUU9BdRD.js'); // Ajusta la ruta si es necesario

// // Leer el archivo
// fs.readFile(filePath, 'utf-8', (err, data) => {
//     if (err) {
//         console.error('Error al leer el archivo:', err);
//         return;
//     }

//     // Reemplazar las variables de entorno en el contenido del archivo
//     let updatedData = data;
//     Object.entries(envVariables).forEach(([key, value]) => {
//         if (value) {
//             const regex = new RegExp(`{{${key}}}`, 'g');
//             updatedData = updatedData.replace(regex, value);
//         } else {
//             console.warn(`La variable de entorno ${key} no está definida.`);
//         }
//     });

//     // Escribir el archivo actualizado
//     fs.writeFile(filePath, updatedData, 'utf-8', (err) => {
//         if (err) {
//             console.error('Error al escribir en el archivo:', err);
//             return;
//         }
//         console.log('Archivo actualizado con las variables de entorno.');
//     });
// });
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();  // Cargar variables de entorno desde .env

// Manejo correcto de __dirname en ES Modules
const __dirname = path.dirname(decodeURIComponent(new URL(import.meta.url).pathname));

// Definir variables de entorno
const envVariables = {
    PUBLIC_EMAILJS_USER_ID: process.env.PUBLIC_EMAILJS_USER_ID,
    PUBLIC_EMAILJS_SERVICE_ID: process.env.PUBLIC_EMAILJS_SERVICE_ID,
    PUBLIC_EMAILJS_TEMPLATE_ID: process.env.PUBLIC_EMAILJS_TEMPLATE_ID,
};

// Ruta del archivo de salida generado por Astro
const filePath = path.resolve(__dirname, 'dist/_astro/index.CUU9BdRD.js');

// Verificar si el archivo existe antes de intentar leerlo
if (!fs.existsSync(filePath)) {
    console.error(`❌ El archivo no existe: ${filePath}`);
    process.exit(1); // Salir con error
}

// Leer el archivo
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error('❌ Error al leer el archivo:', err);
        return;
    }

    // Reemplazar variables en el contenido del archivo
    let updatedData = data;
    Object.entries(envVariables).forEach(([key, value]) => {
        if (value) {
            const regex = new RegExp(`{{${key}}}`, 'g');
            updatedData = updatedData.replace(regex, value);
        } else {
            console.warn(`⚠️ La variable de entorno ${key} no está definida.`);
        }
    });

    // Escribir el archivo actualizado
    fs.writeFile(filePath, updatedData, 'utf-8', (err) => {
        if (err) {
            console.error('❌ Error al escribir en el archivo:', err);
            return;
        }
        console.log('✅ Archivo actualizado con las variables de entorno.');
    });
});
