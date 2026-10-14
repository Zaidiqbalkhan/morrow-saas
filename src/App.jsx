import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Legal from './pages/Legal';
import { scrollToHash } from './utils/navigation';

function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const id = window.setTimeout(() => { if (hash) scrollToHash(hash); else window.scrollTo(0, 0); }, 60);
    return () => window.clearTimeout(id);
  }, [pathname, hash]);
  return null;
}
export default function App() {
  return <BrowserRouter><RouteEffects/><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/demo" element={<Dashboard/>}/>
    <Route path="/legal/:kind" element={<Legal/>}/>
    <Route path="*" element={<Navigate to="/" replace/>}/>
  </Routes></BrowserRouter>;
}
