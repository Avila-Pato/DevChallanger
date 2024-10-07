
## Descripción

**Code Editor App** es una aplicación web que permite a los usuarios escribir, editar y capturar fragmentos de código HTML. La aplicación está diseñada para facilitar la práctica y experimentación con HTML, ofreciendo una interfaz intuitiva para usuarios de todos los niveles.

## Propósito

El propósito de este proyecto es proporcionar un entorno interactivo donde los desarrolladores y aprendices puedan:

- Escribir y modificar código HTML en tiempo real.
- Visualizar el resultado del código escrito.
- Capturar imágenes de su trabajo para compartir o guardar.

## Tecnologías Utilizadas

### Frontend

- **React**: Para construir una interfaz de usuario interactiva y dinámica.
- **Monaco Editor**: Editor de código avanzado que permite a los usuarios escribir código con resaltado de sintaxis.
- **html2canvas**: Para capturar el contenido del editor como una imagen.
- **Tailwind CSS**: Para el diseño y estilo de la aplicación.

### Backend

- **Node.js**: Entorno de ejecución para construir la API del servidor.
- **Express**: Framework web para manejar las solicitudes HTTP y las rutas.
- **MongoDB**: Base de datos NoSQL para almacenar y recuperar los fragmentos de código.
- **Axios**: Para manejar las solicitudes HTTP desde el frontend al backend.

## Funcionalidades

### Frontend

- **Editor de Código**: Los usuarios pueden escribir y modificar código HTML, con soporte para resaltado de sintaxis.
- **Captura de Imagen**: Permite a los usuarios capturar el contenido del editor y descargarlo como una imagen.
- **Interacción de Like/Dislike**: Los usuarios pueden expresar su opinión sobre el código mediante botones de "Like" y "Dislike".

### Backend

- **API RESTful**: Proporciona endpoints para guardar, obtener y eliminar fragmentos de código.
- **Persistencia de Datos**: Los fragmentos de código se almacenan en una base de datos MongoDB para su recuperación y gestión.

## Instalación y Uso

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias del backend:
   ```bash
   cd backend
   npm install

## Previsualización

- <img src="./frontend/src/assets/Captura de pantalla_7-10-2024_124437_localhost.jpeg" alt="Prueba" width=""/>