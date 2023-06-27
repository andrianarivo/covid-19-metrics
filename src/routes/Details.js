import { Outlet } from 'react-router-dom';

export default function Details() {
  return (
    <div>
      This is the details page
      <Outlet />
    </div>
  );
}
