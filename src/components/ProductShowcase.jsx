import { ArrowRight, ArrowUpRight, BadgeCheck, Check, CircleCheck, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Mockup from './Mockup';
import Reveal from './ui/Reveal';

export default function ProductShowcase() {
 return <section className="showcase section-space" id="showcase"><div className="container-wide"><Reveal><div className="showcase-heading"><span className="section-kicker"><span>03</span> / A LOOK INSIDE</span><h2>Clear enough to<br/><em>see what matters.</em></h2><p>One calm command center for your projects, deadlines, and people. The actual demo is clickable, searchable, and full of fictional sample data.</p><Link to="/demo" className="btn btn-lime">Open the dashboard <ArrowUpRight size={19}/></Link></div></Reveal><Reveal delay={80}><div className="showcase-stage"><div className="showcase-stage-caption">MADE FOR YOUR MONDAY MORNINGS <span>✳</span></div><Mockup compact/><div className="floating-review"><span><BadgeCheck size={15}/> NEXT UP</span><strong>Ready for review</strong><p>Solstice · Brand presentation</p><div><span className="avatar-square">AR</span><span className="avatar-square second">MC</span><span>+3 collaborators</span></div></div><div className="floating-task"><CircleCheck size={17}/><div><strong>Another thing off your plate.</strong><small>Project milestones in one place</small></div></div></div></Reveal><div className="showcase-foot"><span>THE INTERACTIVE DEMO IS NOT CONNECTED TO REAL BUSINESS DATA.</span><Link to="/demo">Take the tour <ArrowRight size={16}/></Link></div></div></section>
}
