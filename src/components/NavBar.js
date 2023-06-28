import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const links = [
    { path: '/', name: 'Home', testId: 'home-link' },
  ];
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <NavLink data-testid={link.testId} to={link.path}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
