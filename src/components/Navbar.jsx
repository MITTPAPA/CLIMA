import "../styles/comp.css";

export default function Navbar() {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <nav className="navbar">

      <div className="container nav-content">

        <div
          className="logo"
          onClick={() => scrollToSection("inicio")}
        >
          <img src="/images/logo.png" alt="Logo" />
        </div>

        <ul>

          <li onClick={() => scrollToSection("inicio")}>
            Inicio
          </li>

          <li onClick={() => scrollToSection("acciones")}>
            Plan de Acción
          </li>

          <li onClick={() => scrollToSection("reportes")}>
            Reportes Climáticos
          </li>

          <li onClick={() => scrollToSection("ayuda")}>
            Ayuda al Productor
          </li>

        </ul>

        <button
          className="btn-alerta"
          onClick={() => scrollToSection("reportes")}
        >
          Consultar Alertas
        </button>

      </div>

    </nav>
  );
}