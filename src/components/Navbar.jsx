import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Brand from './ui/Brand';
import { navigation } from '../data/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { setOpen(false); }, [location.pathname, location.hash]);
  useEffect(() => {
    const onEsc = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onEsc); return () => window.removeEventListener('keydown', onEsc);
  }, []);
  return <header className="site-header"><div className="nav-shell container-wide">
    <Brand/>
    <nav className="nav-desktop" aria-label="Main navigation">{navigation.map(item => <Link key={item.label} to={item.to}>{item.label}</Link>)}</nav>
    <div className="nav-actions"><Link className="nav-signin" to="/demo?mode=signin">Sign in <span className="nav-demo-label">(demo)</span></Link><Link className="btn btn-dark nav-cta" to="/demo?mode=start">Start free <ArrowUpRight size={17}/></Link></div>
    <button type="button" className="mobile-menu-button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X size={24}/> : <Menu size={24}/>}</button>
  </div>
  <nav id="mobile-navigation" className={`mobile-navigation ${open ? 'mobile-navigation-open' : ''}`} aria-label="Mobile navigation" inert={!open}>
    {navigation.map(item => <Link key={item.label} to={item.to} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={16}/></Link>)}
    <Link to="/demo?mode=signin" onClick={() => setOpen(false)}>Sign in (demo)<ArrowUpRight size={16}/></Link>
    <Link to="/demo?mode=start" className="btn btn-dark" onClick={() => setOpen(false)}>Explore the demo <ArrowUpRight size={16}/></Link>
  </nav></header>;
}
