import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { faqs } from '../data/site';
import Reveal from './ui/Reveal';
export default function FAQ() {
 const [openIndex, setOpenIndex] = useState(0);
 return <section className="faq section-space" id="faq"><div className="container-wide faq-grid"><Reveal><div className="faq-heading"><span className="section-kicker"><span>06</span> / THE GOOD QUESTIONS</span><h2>Curious?<br/><em>We like that.</em></h2><p>A few things worth knowing before you dive in.</p><span className="faq-asterisk">✳</span></div></Reveal><div className="faq-list">{faqs.map((item,i) => <Reveal key={item.q} delay={i*35}><div className={`faq-item ${openIndex === i ? 'faq-open' : ''}`}><h3><button type="button" id={`faq-trigger-${i}`} aria-controls={`faq-panel-${i}`} aria-expanded={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? -1 : i)}><span>{item.q}</span><span className="faq-icon">{openIndex === i ? <Minus size={19}/> : <Plus size={19}/>}</span></button></h3><div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-trigger-${i}`} hidden={openIndex !== i}><p>{item.a}</p></div></div></Reveal>)}</div></div></section>
}
