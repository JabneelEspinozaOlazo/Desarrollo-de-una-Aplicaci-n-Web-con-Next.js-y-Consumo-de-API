import "./Navbar.css";

export default function Navbar({ title, items }) {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">{title}</h1>
      <ul className="navbar-links">
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
