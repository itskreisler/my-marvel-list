
# MyMarvelList
Un sitio web basado en perfiles para ver los comics y/o personajes de MARVEL y que permite crear una lista personalizada de los comics y/o personajes favoritos.


![Logo](https://raw.githubusercontent.com/itskreisler/my-marvel-list/master/public/img/logo_landscape_mini.png)


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Demo

[my-marvel-list](https://itskreisler.github.io/my-marvel-list)


## Documentation

[Documentation](https://linktodocumentation)


## Features
✅ SI ❌ No
- ✅ Registro de usuarios (Nombre, identificación y correo electrónico) 
- ✅ Una vez registrado el usuario y “logueado” sobre el sitio debe poder:
- ✅ Ver el listado de los Comics con su respectiva imagen
- Detalle de cada uno de los Comics, el detalle debe mostrar la imagen y la información del Comic.
- ✅ El usuario debe poder crear una lista personalizada con sus comics favoritos.
- ✅ La información de los usuarios y sus preferencias debe persistir. 


## FAQ

#### ¿Cómo registrarse en MyMarvelList?

MyMarvelList esta basado en perfiles, es decir crea un perfil con tu (Nombre, identificación y correo electrónico) y ya podras ingresar al sitio.

#### ¿Cómo iniciar sesión en MyMarvelList?

Cuando hayas registrado un perfil ya podras navegar por el sitio. Solo elige un perfil de los que hayas creado anteriormente.

#### ¿Donde persiste la lista de comics y/o personajes favoritos?

La información de los usuarios y sus preferencias persisten en localstorage del navegador.


## Run Locally

Clonar el proyecto

```bash
  git clone https://
```

Ir al directorio del proyecto

```bash
  cd my-project
```

Instalar dependencias

```bash
  npm install
```

Inicie el servidor

```bash
  npm run dev
```


## Environment Variables

Para ejecutar este proyecto, deberá agregar las siguientes variables de entorno a su archivo .env

Crea un copia del archivo `.env.example` y renombralo como `.env`

Tu clave pública:
`PUBLIC_KEY`

Tu clave privada:
`PRIVATE_KEY`


## Tech Stack

**Client:** React(Vite), React-Bootstrap


## Authors

- [@itskreisler](https://www.github.com/itskreisler)


## License

[MIT](https://choosealicense.com/licenses/mit/)

