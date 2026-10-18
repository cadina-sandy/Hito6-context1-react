# 🍕 Hito 6 de Pizzería Mamma Mía - Context API

Proyecto realizado para el desafío **Hito 6 - Pizzería Mamma Mía**, continuando el Hito 5 para manejar el carrito de compras con Context API.

## 🚀 Deploy

[Ver sitio web en GitHub Pages](https://cadina-sandy.github.io/Hito6-context1-react/)

GitHub Actions compila el proyecto con Vite y publica el resultado en Pages al subir cambios a `main`. Las rutas publicadas comienzan con `/Hito6-context1-react/`.

Las pizzas y sus imágenes están guardadas en el proyecto. El sitio funciona en Pages sin instalar ni encender un backend.

## 📝 Descripción

En este hito agregué un contexto para compartir el carrito entre las páginas. Ahora se pueden añadir pizzas desde el inicio y ver el total actualizado en el Navbar y en el carrito.

Se mantiene la navegación entre inicio, registro, ingreso, carrito, perfil, detalle de pizza y página 404.

Se conservan los estilos y componentes de los hitos anteriores, con comentarios básicos en español para explicar los cambios.

## ✨ Funcionalidades

- Navegar con los enlaces del Navbar usando `Link`.
- Abrir el carrito desde el botón del total.
- Mostrar el listado de pizzas y el detalle de `p001` desde el archivo local `src/data/pizzas.js`.
- Conservar los formularios de registro e ingreso con sus validaciones.
- Añadir pizzas al carrito desde las tarjetas de Home y desde el detalle de pizza.
- Sumar una unidad cuando se agrega una pizza que ya está en el carrito.
- Aumentar y disminuir cantidades desde Cart.
- Eliminar una pizza cuando su cantidad llega a cero.
- Mostrar el mismo total actualizado en el Navbar y en Cart.
- Mantener el pedido al navegar entre páginas.
- Mostrar el perfil con el correo `sandy@cadin.com` y un botón de cerrar sesión estático.
- Mostrar una página 404 con una pizza hecha en CSS y un enlace para volver al inicio.

El carrito comienza vacío y se reinicia al recargar la página. Los botones Pagar y Cerrar sesión siguen sin realizar acciones.

## 🛠️ Tecnologías utilizadas

- HTML5, CSS3 y JavaScript.
- React, Context API, useContext y useState.
- React Router.
- Vite.

## 📁 Estructura del proyecto

```text
Hito6-context1-react/
├── public/images/pizza.jpg
├── src/
│   ├── components/
│   │   ├── CardPizza.jsx
│   │   ├── Footer.jsx
│   │   ├── Inicio.jsx
│   │   └── Navbar.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Register.jsx
│   │   ├── Login.jsx
│   │   ├── Cart.jsx
│   │   ├── Pizza.jsx
│   │   ├── Profile.jsx
│   │   └── NotFound.jsx
│   ├── data/pizzas.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## ⚙️ Cómo funciona

En `CartContext.jsx` guardé el carrito con `useState` y las funciones para agregar pizzas y disminuir cantidades. El total se calcula sumando el precio de cada pizza por su cantidad.

En `main.jsx`, `CartProvider` envuelve la aplicación para que los componentes puedan usar esos datos con `useContext`. Navbar muestra el total, CardPizza agrega productos y Cart permite revisar y modificar el pedido. Así el total se calcula en un solo lugar.

`BrowserRouter` mantiene la navegación del hito anterior. Las pizzas siguen en el archivo local `pizzas.js`, por lo que no se necesita un backend. No agregué el contexto opcional para las consultas.

| Ruta | Página |
| --- | --- |
| `/` | Home: listado de pizzas |
| `/register` | Register: formulario de registro |
| `/login` | Login: formulario de ingreso |
| `/cart` | Cart: carrito de compras |
| `/pizza/p001` | Pizza: detalle de la pizza p001 |
| `/profile` | Profile: perfil estático |
| `/404` | NotFound: página no encontrada |
| Cualquier otra ruta | NotFound |

La ruta `/pizza/p001` se abre directamente desde la dirección del navegador; no se incluye en el Navbar, como permite la pauta.

## 💻 Ejecutar el proyecto

En la carpeta del proyecto, instalar las dependencias:

```bash
npm install
```

Iniciar la aplicación:

```bash
npm run dev
```

Para compilar el frontend:

```bash
npm run build
```

## ⬆️ Subida del proyecto

El código está en la rama `main`. Las carpetas `node_modules` y `dist` se excluyen del repositorio.

## 🔗 Repositorio

[Ver repositorio en GitHub](https://github.com/cadina-sandy/Hito6-context1-react)

## 👩‍💻 Autora

**Sandy Cadin**
