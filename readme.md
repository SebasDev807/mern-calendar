
# MERN Calendar

MERN Calendar es una aplicación de calendario construida con el stack MERN (MongoDB, Express, React, Node.js) que te permite gestionar eventos y citas de manera sencilla y eficiente. Este proyecto incluye un backend basado en Express y un frontend construido con React, ambos gestionados utilizando **pnpm**.

## Características

- Creación, edición y eliminación de eventos.
- Visualización de eventos en un calendario.
- Interfaz de usuario moderna y responsiva.
- API RESTful para la gestión de eventos.

## Tecnologías

- **Frontend**: React
- **Backend**: Express.js
- **Base de datos**: MongoDB
- **Gestión de paquetes**: pnpm

## Requisitos

- **Node.js**: 14 o superior.
- **pnpm**: Asegúrate de tener **pnpm** instalado. Si no lo tienes, puedes instalarlo globalmente con el siguiente comando:

  ```bash
  npm install -g pnpm
  ```

- **MongoDB**: Necesitarás una instancia de MongoDB (puede ser local o en la nube, como MongoDB Atlas).

## Instalación

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/mern-calendar.git
cd mern-calendar
```

### 2. Instalación de dependencias

#### Backend (Express):

Navega al directorio del backend y usa `pnpm` para instalar las dependencias:

```bash
cd backend
pnpm install
```

#### Frontend (React):

Navega al directorio del frontend y también instala las dependencias:

```bash
cd frontend
pnpm install
```

### 3. Configuración de variables de entorno

Asegúrate de configurar las variables de entorno necesarias para la conexión a la base de datos y otros servicios.

Crea un archivo `.env` en el directorio `backend` y añade lo siguiente:

```env
DB_URL=tu_uri_de_mongodb
PORT=8080
```

### 4. Ejecuta el proyecto

#### Backend (Express):

En el directorio `backend`, ejecuta el siguiente comando para iniciar el servidor del backend:

```bash
pnpm dev
```

#### Frontend (React):

En el directorio `frontend`, ejecuta el siguiente comando para iniciar el servidor de desarrollo del frontend:

```bash
pnpm dev
```

### 5. Accede a la aplicación

Una vez que ambos servidores estén en funcionamiento:

- El backend estará corriendo en `http://localhost:8080` (por defecto).
- El frontend estará disponible en `http://localhost:4531`.

## Estructura del Proyecto

```
mern-calendar/
│
├── backend/              # Backend de Express
│   ├── config/           # Archivos de configuración (por ejemplo, MongoDB)
│   ├── controllers/      # Lógica para manejar las rutas
│   ├── models/           # Modelos de base de datos
│   ├── routes/           # Rutas del servidor
│   └── server.js         # Archivo principal del servidor
│
├── frontend/             # Frontend de React
│   ├── public/           # Archivos estáticos públicos
│   ├── src/              # Archivos fuente del frontend
│   ├── pages/            # Páginas principales de la aplicación
│   └── App.js            # Archivo principal de la aplicación
│
└── README.md             # Este archivo
```

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu nueva funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz un commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Sube tus cambios a tu fork (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request para revisión.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---