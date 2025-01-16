---
layout: '@/templates/BasePost.astro'
title:  WANDERLUST
description: Wanderlust is a social network conceived and designed for exploration enthusiasts to share their trips.
pubDate: 2024-09-08T00:00:00Z
imgSrc: '/assets/images/wanderlust.png'
imgAlt: 'Image Wanderlust'
---

# Wanderlust 🌍 
[![Repo](https://img.shields.io/badge/Repo-Link-blue?logo=github)](https://github.com/crisky94/ProyectoBlogViajes)

---  
### Este proyecto arrancó el 10 de diciembre de 2023  
---

**¡Bienvenidos a Wanderlust!** Aquí podrás compartir tus recomendaciones y experiencias de viaje, así como descubrir las de otros usuarios apasionados por explorar el mundo.  

**Wanderlust** es un término alemán que significa *"PASIÓN POR VIAJAR"*, y siendo unos enamorados de los viajes, no hay mejor palabra que represente nuestra esencia.

---

## 🌍 Sobre Wanderlust

Wanderlust es una red social diseñada para amantes de la exploración. Ofrece un espacio para compartir tus aventuras, excursiones, experiencias, escapadas, consejos y secretos de viaje. Tanto si eres un trotamundos experimentado como si buscas inspiración para tu próxima aventura, ¡en Wanderlust encontrarás sugerencias auténticas de otros viajeros!

---

## 🛠️ Funciones Principales

### 🔓 Acceso para todos los usuarios:
- 🔍 **Buscar publicaciones** por lugar y categoría.  
- 👍 **Ordenar resultados** por votos y fecha.  
- 📖 **Visualizar detalles** de cualquier publicación.  
- 🔐 **Iniciar sesión** con email y contraseña.  
- 📝 **Registro de usuarios** proporcionando nombre, email y contraseña.  

### 🔐 Funciones exclusivas para usuarios registrados:
- ✍️ **Publicar recomendaciones** con detalles como:  
  - Título  
  - Categoría  
  - Lugar  
  - Breve descripción  
  - Descripción extendida  
  - Foto  
- 🤍 **Votar** las publicaciones de otros usuarios.  
- 🗑️ **Eliminar** tus propias publicaciones.  

---

## 🚀 Cómo Empezar

Sigue estos pasos para configurar el proyecto en tu equipo local:  

1. **Clona el repositorio:**  
   ```bash
   git clone https://github.com/crisky94/ProyectoBlogViajes.git
    ```
2. **Instala las dependencias en la carpeta api:**  
    ```bash
   npm install
    ```
3. **Instala el workbench:**  
 [Workbench](https://www.mysql.com/products/workbench/)
4. **Crear tablas de la base de datos:**  
    ```bash
   node ./src/db/initDB.js
    ```
5. **Ejecuta el servidor en la carpeta api:**  
    ```bash
   npm run dev
    ```
2. **Instala las dependencias en la carpeta Frontend:**  
    ```bash
   npm install
    ```
2. **Ejecuta el servidor en la carpeta Frontend:**  
    ```bash
   npm run dev
    ```