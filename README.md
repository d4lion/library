# 📚 Secretos para Contar - Librería

Una iniciativa para distribuir el conocimiento de manera accesible y moderna.

## 📑 Índice / Table of Contents

- [🇪🇸 Español](#-español)
  - [📚 Descripción](#-descripción)
  - [🚀 Desarrollo](#-desarrollo)
  - [📦 Despliegue](#-despliegue)
- [🇺🇸 English](#-english)
  - [📚 Description](#-description)
  - [🚀 Development](#-development)
  - [📦 Deployment](#-deployment)
---

# 🇪🇸 Español

### 📚 Descripción

Esta librería nace del proyecto *Secretos para Contar*, como una nueva forma de distribuir el conocimiento y facilitar el aprendizaje para todas las personas. Su objetivo es proporcionar una base sólida y accesible para crear experiencias educativas innovadoras.

---

### 🚀 Desarrollo

Este proyecto utiliza [`pnpm`](https://pnpm.io) para una gestión de paquetes rápida y eficiente.

### 📝 Variables de entorno
El proyecto está haciendo uso de variables de entorno para definir de manera mas sencilla y elastica cada uno de los endpoints que se definen y a su vez para facilitar cuando se hace uso de
APis locales con bases de datos locales vs cuando se realizan ya en producción, la estructura a seguir es esta:

```toml
# PARA EL DEVELOPMENT MODE SE PUEDEN ESTOS 3 ESTADOS
#
# TESTING_LOCAL_API -> que usa los endpoints locales
# TESTING_REMOTE_API -> que usa los endpoints remotos
# DEVELOPMENT ->
# 
DEVELOPMENT_STATE="TESTING_LOCAL_API"

REMOTE_MOCKAPI_URL="https://***.mockapi.io/api/v1/books" # en este caso se usa mockapi pero se puede cambiar por cualquier endpoint
LOCAL_API="http://localhost:5111"
LOCAL_BOOKS_ENDPOINT_URL="http://localhost:5111/api/books"
```

Para iniciar el entorno de desarrollo:

```bash
pnpm run dev
```

### 📦 Despliegue
1. Construcción del proyecto
Compila la aplicación para producción:

```bash
pnpm run build
```

2. Ejecutar en modo producción
Una vez construido, inicia el servidor:
```bash
pnpm start
```

### 💡 Contribuciones
¿Tienes ideas o sugerencias? ¡Tu colaboración es bienvenida!
Abre un issue o envía un pull request.


# 🇺🇸 English

### 📚 Description

This library was born from the *Secrets to Tell* project, as a new way to distribute knowledge and facilitate learning for everyone. Its goal is to provide a solid and accessible foundation for creating innovative educational experiences.

---

### 🚀 Development

This project uses [`pnpm`](https://pnpm.io) for fast and efficient package management.

To start the development environment:

```bash
pnpm run dev
```

### 📦 Deployment
1. Build the project
Compile the application for production:

```bash
pnpm run build
```

2. Run in production mode
Once built, start the server:
```bash
pnpm start
```

# 💡 Contributions
Have ideas or suggestions? You're welcome to collaborate!
Feel free to open an issue or submit a pull request.
