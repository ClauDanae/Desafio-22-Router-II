import { NavLink } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
return (
<div className="Navbar">
<img src = "../PokeParada.png" alt="icono-pokeparada"/>   
<div>
<NavLink className={ setActiveClass } end to="/">
Home
</NavLink>
{" - "}
<NavLink className={ setActiveClass } to="/pokemones">
Busca tu Pokémon
</NavLink>
</div>
</div>
);
}