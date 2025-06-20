// server.js (NUEVA VERSIÓN AUTOMÁTICA)

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const svgBaseUrl = "/svg";
// Directorio donde guardas todas las carpetas de clientes (ej: 'financiero')
const clientsDirectory = __dirname; 

console.log("Iniciando configuración de rutas...");

// Leemos las carpetas de los clientes (ej: 'financiero', 'seguros', etc.)
fs.readdirSync(clientsDirectory, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && !['.git', 'node_modules', 'utils'].includes(dirent.name)) // Ignoramos carpetas que no son de clientes
  .forEach(clientDir => {
    const clientName = clientDir.name;
    const clientPath = path.join(clientsDirectory, clientName);

    // Dentro de cada cliente, leemos las carpetas de secciones (ej: 'banca', 'citas')
    fs.readdirSync(clientPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .forEach(sectionDir => {
        const sectionName = sectionDir.name;
        const sectionPath = path.join(clientPath, sectionName);
        const indexPath = path.join(sectionPath, "index.js");

        // Comprobamos si existe un 'index.js' que actúe como router
        if (fs.existsSync(indexPath)) {
          const router = require(indexPath);
          const urlPath = `${svgBaseUrl}/${clientName}/${sectionName}`;
          
          app.use(urlPath, router);
          console.log(`✅ Ruta registrada: ${urlPath}`);
        }
      });
  });

// Middleware para manejar errores 404 (rutas no encontradas)
app.use((req, res, next) => {
    res.status(404).send("Error 404: La URL del SVG no existe.");
});

// Middleware para manejar otros errores del servidor
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error 500: Algo salió mal en el servidor.');
});


app.listen(PORT, () => {
  console.log(`\nServidor escuchando en puerto ${PORT}`);
  console.log("Puedes empezar a usar las URLs generadas.");
});