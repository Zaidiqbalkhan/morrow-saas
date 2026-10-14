import { useState } from 'react';
import { ArrowRight, ArrowUpRight, BookOpen, Check, Compass, PenLine, X } from 'lucide-react';
import Reveal from './ui/Reveal';
const resources = [
 { number:'01', tag:'WORKFLOW', title:'Start with a clearer Monday.', read:'4 MIN READ', text:'A useful start-of-week ritual: pick three outcomes, check dependencies, and give every project one next action. Then leave enough room for creative thinking.' },
 { number:'02', tag:'TEAM CULTURE', title:'Make space for focused work.', read:'5 MIN READ', text:'Try a shared check-in instead of another status meeting. Keep discussions asynchronous when possible, and protect long uninterrupted blocks for meaningful work.' },
 { number:'03', tag:'STUDIO NOTES', title:'Keep the work moving gently.', read:'3 MIN READ', text:'Progress does not have to mean constant urgency. Define what done looks like, make feedback actionable, and celebrate small milestones before starting the next sprint.' },
];
export default function Resources() {
 const [expanded, setExpanded] = useState(null);
 return <section id="resources" className="resources section-space"><div className="container-wide"><Reveal><div className="resources-heading"><div><span className="section-kicker"><span>07</span> / FIELD NOTES</span><h2>Ideas for<br/><em>the way forward.</em></h2></div><p>Short, practical reads for the people who make things happen. Demo editorial content.</p></div></Reveal><div className="resources-list">{resources.map((r,i) => <Reveal key={r.number} delay={i*70}><article className="resource-row"><span className="resource-index">{r.number}</span><span className="resource-icon">{i===0 ? <Compass size={21}/> : i===1 ? <PenLine size={21}/> : <BookOpen size={21}/>}</span><div className="resource-title"><span>{r.tag} / {r.read}</span><h3>{r.title}</h3>{expanded === i && <p>{r.text}</p>}</div><button type="button" aria-expanded={expanded === i} className="resource-open" aria-label={`${expanded===i ? 'Collapse' : 'Read'} ${r.title}`} onClick={() => setExpanded(expanded === i ? null : i)}>{expanded === i ? <X size={20}/> : <ArrowUpRight size={21}/>}</button></article></Reveal>)}</div></div></section>
}
