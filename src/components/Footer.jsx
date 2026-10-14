import { ArrowRight, ArrowUpRight, Github, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Brand from './ui/Brand';
const groups = [
 { title:'PRODUCT', links: [{text:'Features',to:'/#features'},{text:'Dashboard',to:'/demo'},{text:'Pricing',to:'/#pricing'},{text:'How it works',to:'/#how-it-works'}] },
 { title:'COMPANY', links:[{text:'Our approach',to:'/#how-it-works'},{text:'Studio stories',to:'/#stories'},{text:'The product',to:'/#product'}] },
 { title:'RESOURCES', links:[{text:'Field notes',to:'/#resources'},{text:'FAQs',to:'/#faq'},{text:'Try the demo',to:'/demo'}] },
 { title:'LEGAL', links:[{text:'Privacy (sample)',to:'/legal/privacy'},{text:'Terms (sample)',to:'/legal/terms'}] },
];
export default function Footer() {
 return <footer className="footer"><div className="container-wide"><div className="footer-main"><div className="footer-brand"><Brand light/><p>A little more room for<br/>the work that matters.</p><span>✳ A fictional SaaS concept, thoughtfully made.</span></div><div className="footer-links">{groups.map(group => <div key={group.title}><strong>{group.title}</strong>{group.links.map(item => <Link key={item.text} to={item.to}>{item.text}</Link>)}</div>)}</div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Morrow Studio. Fictional concept.</span><span>Made for creative minds, with care. ✳</span><div className="footer-social"><a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub homepage (external placeholder)" title="GitHub external placeholder"><Github size={18}/></a><a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn homepage (external placeholder)" title="LinkedIn external placeholder"><Linkedin size={18}/></a><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram homepage (external placeholder)" title="Instagram external placeholder"><Instagram size={18}/></a></div></div></div></footer>
}
