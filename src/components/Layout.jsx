import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ScrollToTop from './ScrollToTop.jsx'
export default function Layout(){return <div className="min-h-screen flex flex-col bg-ivory dark:bg-warmblack"><Navbar/><ScrollToTop/><main className="flex-1"><Outlet/></main><Footer/></div>}
