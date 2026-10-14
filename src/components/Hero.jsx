import { ArrowDownRight, ArrowRight, ArrowUpRight, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Mockup from './Mockup';
import Reveal from './ui/Reveal';

export default function Hero() {
  return <section className="hero" id="product"><div className="container-wide">
    <div className="hero-top"><div className="hero-copy"><div className="eyebrow-pill"><span className="pulse-dot"/> THE STUDIO WORKSPACE, REIMAGINED <span className="eyebrow-line"/></div><h1>Make room for <em>better</em> work<span className="hero-period">.</span></h1><p className="hero-intro">Projects, people, and priorities—finally in one thoughtful place. Less keeping up. More making things happen.</p><div className="hero-buttons"><Link to="/demo?mode=start" className="btn btn-dark btn-large">Explore free demo <ArrowUpRight size={19}/></Link><Link to="/#how-it-works" className="btn btn-underline">See how it works <ArrowRight size={18}/></Link></div><div className="hero-proof"><div className="avatar-stack"><span>JD</span><span>MO</span><span>KL</span><span>RS</span></div><p>Made for the minds behind<br/><strong>thoughtful, ambitious work.</strong></p></div></div>
      <div className="hero-right"><div className="hero-orbit"><span className="hero-orbit-ring ring-1"/><span className="hero-orbit-ring ring-2"/><span className="hero-orbit-ring ring-3"/><span className="orb orb-main">✳</span><span className="orb orb-mini">↗</span><div className="hero-sticker"><span>GOOD IDEAS<br/>NEED SPACE</span><Sparkles size={22}/></div></div><div className="hero-side-label">YOUR CREATIVE RHYTHM, BACK AGAIN <ArrowDownRight size={18}/></div></div>
    </div>
    <Reveal className="hero-product-reveal" delay={120}><div className="hero-product-stage"><div className="hero-stage-caption"><span className="stage-spark">✳</span><span>A little more clarity.<br/>A lot more momentum.</span></div><div className="hero-mockup"><Mockup/></div><div className="hero-stage-note"><span>01 / THE OVERVIEW</span><span>Everything, in its place <ArrowUpRight size={13}/></span></div></div></Reveal>
  </div></section>;
}
