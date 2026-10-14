import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, CircleCheck, Clock3, Columns3, Compass, LayoutList, Lightbulb, MoveRight, SlidersHorizontal, Sparkles, Users2, WandSparkles } from 'lucide-react';
import Reveal from './ui/Reveal';

const modes = [
  { id: 'plan', title: 'Plan', subtitle: 'Keep the big picture in view', icon: Compass },
  { id: 'create', title: 'Create', subtitle: 'Make collaboration feel easy', icon: Lightbulb },
  { id: 'deliver', title: 'Deliver', subtitle: 'Move with confidence', icon: CircleCheck },
];
const taskSets = {
  plan: [{title:'Creative direction', label:'Ready to start', color:'pink'}, {title:'Moodboard exploration', label:'In progress', color:'lavender'}, {title:'Content structure', label:'Next up', color:'yellow'}],
  create: [{title:'Homepage concepts', label:'In review', color:'lavender'}, {title:'Visual system', label:'In progress', color:'pink'}, {title:'Content production', label:'Coming up', color:'yellow'}],
  deliver: [{title:'Final stakeholder review', label:'Complete', color:'green'}, {title:'QA & polish', label:'In progress', color:'lavender'}, {title:'Launch checklist', label:'Next up', color:'yellow'}],
};
export default function Features() {
  const [mode, setMode] = useState('plan');
  const handleTabKey = (event, index) => {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % modes.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + modes.length) % modes.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = modes.length - 1;
    else return;
    event.preventDefault();
    setMode(modes[next].id);
    event.currentTarget.parentElement.querySelectorAll('[role=tab]')[next]?.focus();
  };
  return <section id="features" className="features section-space"><div className="container-wide">
    <Reveal><div className="section-heading feature-heading"><div><span className="section-kicker"><span>01</span> / WHY MORROW</span><h2>Less juggling.<br/><em>More doing.</em></h2></div><p>Tools should work with your creative process, not interrupt it. Morrow gets the little things out of the way so the big things get done.</p></div></Reveal>
    <div className="feature-grid"><Reveal className="feature-primary"><div className="feature-panel feature-panel-dark"><div className="feature-panel-header"><span className="feature-index">01 / NO MORE GUESSWORK</span><span className="feature-corner-icon"><SlidersHorizontal size={20}/></span></div><div className="feature-board"><div className="board-topline"><span><span className="board-flower">✳</span> The little things, organized</span><span>Studio workspace <span className="board-chevron">⌄</span></span></div><div className="board-tabs" role="tablist" aria-label="Workflow stages">{modes.map((item,index) => <button role="tab" aria-selected={mode === item.id} aria-controls="workflow-panel" id={`workflow-${item.id}`} tabIndex={mode===item.id?0:-1} onKeyDown={e=>handleTabKey(e,index)} type="button" key={item.id} className={mode === item.id ? 'active' : ''} onClick={() => setMode(item.id)}>{item.title}</button>)}</div><div className="board-task-list" id="workflow-panel" role="tabpanel" aria-labelledby={`workflow-${mode}`} tabIndex={0}>{taskSets[mode].map((task, i) => <div className="board-task" key={task.title}><div className={`board-task-symbol ${task.color}`}>{i === 0 ? <Sparkles size={17}/> : i === 1 ? <Columns3 size={17}/> : <LayoutList size={17}/>}</div><div><strong>{task.title}</strong><small>Solstice brand project</small></div><span className={`board-status ${task.color}`}>{task.label}</span></div>)}</div><div className="board-add">+ &nbsp; Your next brilliant idea goes here</div></div><div className="feature-dark-bottom"><div><h3>One place for all the moving parts.</h3><p>Bring every task, timeline, and teammate together. Switch the stages above to try it.</p></div><span className="feature-arrow"><ArrowUpRight size={20}/></span></div></div></Reveal>
      <Reveal className="feature-secondary" delay={100}><div className="feature-panel feature-panel-peach"><div className="feature-panel-header"><span className="feature-index">02 / PEOPLE, NOT PUZZLES</span><Users2 size={22}/></div><div className="capacity-display"><div className="capacity-card"><div className="capacity-head"><span>Team pulse <span className="green-dot"/></span><span>This week ↗</span></div><div className="capacity-users"><span>AR</span><span>MC</span><span>JT</span><span>SO</span></div><div className="capacity-bars"><div><label>Alex <span>72%</span></label><i><b style={{width:'72%'}}/></i></div><div><label>Maya <span>56%</span></label><i><b style={{width:'56%'}}/></i></div><div><label>Jordan <span>88%</span></label><i><b style={{width:'88%'}}/></i></div></div><p><CircleCheck size={13}/> A clearer view of everyone's week</p></div></div><h3>See how everyone's doing.</h3><p>Know when to lend a hand and when to give someone space to create.</p></div></Reveal>
      <Reveal className="feature-tertiary" delay={80}><div className="feature-panel feature-panel-lime"><div className="feature-panel-header"><span className="feature-index">03 / THE LITTLE BIG PICTURE</span><span><Clock3 size={23}/></span></div><div className="timeline-mini"><div className="timeline-mini-title">October <span>2026 / PROJECT TIMELINE</span></div><div className="timeline-mini-days"><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span></div><div className="timeline-mini-row"><strong>Research</strong><span className="timeline-bar bar-a"/></div><div className="timeline-mini-row"><strong>Design</strong><span className="timeline-bar bar-b"/></div><div className="timeline-mini-row"><strong>Review</strong><span className="timeline-bar bar-c"/></div><div className="timeline-mini-today"/></div><div><h3>The whole story, at a glance.</h3><p>See what's ahead, what's moving, and what's worth a conversation.</p></div></div></Reveal>
      <Reveal className="feature-quaternary" delay={160}><div className="feature-panel feature-panel-paper"><div className="insights-visual"><div className="insights-star">✳</div><div className="insights-bubble bubble-one">less <em>noise</em></div><div className="insights-bubble bubble-two">more <em>flow.</em></div><div className="insights-curve"/></div><div><span className="feature-index">04 / BUILT TO FEEL GOOD</span><h3>Calm is a competitive advantage.</h3><p>Clean views. Thoughtful details. Just what you need, right when you need it.</p></div></div></Reveal>
    </div>
  </div></section>;
}
