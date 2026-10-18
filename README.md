# Pizzería Mamma Mía - Hito 6

Continuación del Hito 5 con Context API para compartir el carrito.
Conservé las páginas, los estilos y las pizzas locales del proyecto anterior.

## Ejecutar

Necesitas Node.js y npm. Dentro de esta carpeta:

```bash
npm ci
npm run dev
```

Abre la dirección que muestra Vite. Para compilar: `npm run build`.
Para revisar la compilación: `npm run preview`.
No hace falta iniciar un backend.

## Lo que agregué

- `src/context/CartContext.jsx`: guarda el carrito, agrega pizzas, disminuye cantidades y calcula el total.
- `src/main.jsx`: envuelve la aplicación con CartProvider.
- Navbar consume el total del contexto.
- Home pasa cada pizza a CardPizza, que usa el contexto en el botón Añadir.
- Cart muestra las pizzas del contexto y permite sumar o restar unidades. Si una cantidad llega a cero, se elimina la pizza.
- Cart y Navbar muestran el mismo total calculado en el contexto.
- El botón del detalle de pizza también agrega al carrito.

El carrito comienza vacío. Se conserva al cambiar de página, pero al recargar se reinicia porque está guardado en memoria con useState.
No implementé el contexto opcional de consultas: mantuve los datos locales del Hito 5.
Pagar y Cerrar sesión siguen como botones de presentación; no hay pago ni autenticación real.

## Revisar a mano

1. Añadir dos napolitanas y una española en Inicio: total $19.150.
2. Abrir el carrito: deben aparecer dos filas, con cantidades 2 y 1.
3. Sumar y restar cantidades: el total del menú y del carrito debe coincidir.
4. Restar hasta cero: la pizza desaparece. Al quitar todas, el total es $0.
5. Volver a Inicio y al carrito: el pedido se mantiene mientras no se recargue.

Las rutas anteriores se mantienen: /, /register, /login, /cart, /pizza/p001, /profile y /404.
La configuración usa la raíz del sitio. Si se publica dentro de una carpeta de GitHub Pages, ajustar base en vite.config.js al nombre del repositorio.
