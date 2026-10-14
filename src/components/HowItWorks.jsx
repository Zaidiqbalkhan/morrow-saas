import { ArrowRight, Check, ClipboardList, MousePointer2, Rocket, WandSparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './ui/Reveal';
const steps = [
  { number: '01', icon: ClipboardList, title: 'Bring your work in.', desc: 'Start with a project, give it a name, and get everything into one welcoming space.' },
  { number: '02', icon: WandSparkles, title: 'Find your rhythm.', desc: 'Shape tasks, make milestones, and give everyone a clear next step.' },
  { number: '03', icon: Rocket, title: 'Make it happen.', desc: 'Follow the progress, spot roadblocks early, and enjoy the finish line.' },
];
export default function HowItWorks() {
 return <section className="how section-space" id="how-it-works"><div className="container-wide"><Reveal><div className="how-header"><div><span className="section-kicker"><span>02</span> / THE SIMPLE PART</span><h2>A better flow<br/>starts <em>here.</em></h2></div><p>Three easy steps from scattered thoughts to a studio that feels in sync.</p></div></Reveal><div className="how-steps">{steps.map((step, i) => <Reveal key={step.number} delay={i*90}><div className="how-step"><div className="how-step-number">{step.number}<span>{i !== 2 && <ArrowRight size={22}/>}</span></div><div className="how-icon"><step.icon size={25} strokeWidth={1.7}/></div><h3>{step.title}</h3><p>{step.desc}</p></div></Reveal>)}</div><Reveal><Link to="/demo" className="text-link">Try it in the interactive demo <ArrowRight size={18}/></Link></Reveal></div></section>
}
