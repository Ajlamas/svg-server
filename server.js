// server.js (VERSIÓN DE DEPURACIÓN)

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const svgBaseUrl = "/svg";
const clientsDirectory = __dirname;

console.log("Iniciando configuración de rutas...");

fs.readdirSync(clientsDirectory, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && !['.git', 'node_modules', 'utils'].includes(dirent.name))
  .forEach(clientDir => {
    const clientName = clientDir.name;
    const clientPath = path.join(clientsDirectory, clientName);

    fs.readdirSync(clientPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .forEach(sectionDir => {
        const sectionName = sectionDir.name;
        const sectionPath = path.join(clientPath, sectionName);
        const indexPath = path.join(sectionPath, "index.js");

        if (fs.existsSync(indexPath)) {
          // --- INICIO DE LÍNEAS DE DEPURACIÓN ---
          console.log(`---> Intentando cargar router desde: ${indexPath}`);
          const router = require(indexPath);
          console.log(`     El tipo de módulo cargado es: ${typeof router}`);

          if (typeof router !== 'function') {
            console.error(`!!!!!! ERROR FATAL: El archivo en ${indexPath} no exportó una función. Revisa que el archivo y todas sus dependencias tengan 'module.exports = router;' al final.`);
            // Forzamos la detención para que el error sea obvio
            process.exit(1); 
          }
          // --- FIN DE LÍNEAS DE DEPURACIÓN ---

          const urlPath = `${svgBaseUrl}/${clientName}/${sectionName}`;
          app.use(urlPath, router);
          console.log(`✅ Ruta registrada: ${urlPath}`);
        }
      });
  });

app.use((req, res, next) => {
    res.status(404).send("Error 404: La URL del SVG no existe.");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error 500: Algo salió mal en el servidor.');
});

app.listen(PORT, () => {
  console.log(`\nServidor escuchando en puerto ${PORT}`);
});