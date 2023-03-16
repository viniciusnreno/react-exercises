import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/index.jsx' 
export function Home() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}