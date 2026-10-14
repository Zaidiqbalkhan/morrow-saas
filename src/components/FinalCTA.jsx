import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './ui/Reveal';
export default function FinalCTA() {
 return <section className="final-cta"><div className="container-wide"><Reveal><div className="final-cta-inner"><div className="final-ornament">✳</div><span className="final-eyebrow">YOUR BEST WORK IS STILL AHEAD</span><h2>What could you make<br/>with a little more <em>space?</em></h2><p>One place. Fewer distractions. A whole lot of possibility.</p><Link to="/demo?mode=start" className="btn btn-lime btn-large">Explore Morrow for free <ArrowUpRight size={19}/></Link><span className="final-footnote">Interactive frontend demo · No signup or card required</span><div className="final-swirl swirl-one"/><div className="final-swirl swirl-two"/></div></Reveal></div></section>
}
