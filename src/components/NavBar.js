import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const links = [
    { path: '/', name: 'Home' },
  ];
  return (
    <nav>
      <ul>
        {
            links.map(
              (link) => (
                <li key={link.path}>
                  <NavLink to={link.path}>{link.name}</NavLink>
                </li>
              ),
            )
          }
      </ul>
    </nav>
  );
}
