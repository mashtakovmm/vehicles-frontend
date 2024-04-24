import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import "./Layout.css"


const Layout = () => (
 <div className='layout-containter'>
    <Navbar />
    <main>
      <Outlet />
    </main>
 </div>
);

export default Layout;