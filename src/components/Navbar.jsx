import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router";

function Navbar() {
  const { total } = useContext(CartContext);
  return (
    <header className="site-header">
      <span className="brand">🍕 Pizzería Mamma Mía</span>
      {/* Link cambia de página sin recargar el sitio. */}
      <nav aria-label="Navegación principal">
        <Link to="/">Inicio</Link>
        <Link to="/register">Registro</Link>
        <Link to="/login">Ingresar</Link>
        <Link to="/profile">Perfil</Link>
        <Link to="/404">404</Link>
        <Link to="/cart">🛒 Total: ${total.toLocaleString("es-CL")}</Link>
      </nav>
    </header>
  );
}

export default Navbar;
