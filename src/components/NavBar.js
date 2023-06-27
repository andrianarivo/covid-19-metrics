import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const links = [
    { path: '/', name: 'Home' },
    { path: 'details', name: 'Details' },
  ];
  return (
    <nav>
      <ul>
        {links.map((link) => <li><NavLink to={link.path}>{link.name}</NavLink></li>)}
      </ul>
    </nav>
  );
}
