import { NavLink } from 'react-router-dom';

import { useContext } from 'react';
import { ThemeContext } from './../context/theme.context';

function Navbar() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const pickClassName = ({isActive}) => isActive && 'selected'
  return (
    <nav className={"Navbar " + theme}>
      <div>
        <NavLink to="/" className={pickClassName}>Home</NavLink>
        <NavLink to="/projects" className={pickClassName}>Projects</NavLink>
      </div>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === 'light' ? 'dark 🌜' : 'light 🟡'}
      </button>
    </nav>
  );
}

export default Navbar;
