import { ArrowUpRight, Quote } from 'lucide-react';
import { quotes } from '../data/site';
import Reveal from './ui/Reveal';
export default function Testimonials() {
 return <section className="testimonials section-space" id="stories"><div className="container-wide"><Reveal><div className="testimonials-heading"><div><span className="section-kicker"><span>04</span> / VOICES FROM THE STUDIO</span><h2>Good work is<br/><em>a team sport.</em></h2></div><div className="sample-disclaimer"><span>✳</span> The following are fictional sample personas and quotations, included only to demonstrate testimonial design.</div></div></Reveal><div className="quote-grid">{quotes.map((item,i) => <Reveal key={item.name} delay={i*80}><figure className="quote-card"><Quote size={27} fill="currentColor" strokeWidth={0}/><blockquote>“{item.quote}”</blockquote><figcaption><span className={`quote-avatar avatar-${item.color}`}>{item.initials}</span><span><strong>{item.name}</strong><small>{item.title}<br/>{item.company} · fictional</small></span></figcaption></figure></Reveal>)}</div></div></section>
}
