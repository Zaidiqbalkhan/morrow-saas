import { useId } from 'react';
import { ArrowUpRight, CalendarDays, Check, ChevronDown, ChevronRight, CircleCheck, Clock3, Ellipsis, LayoutGrid, MoreHorizontal, Plus, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BrandMark } from './ui/Brand';

const projects = [
  { name: 'Solstice rebrand', detail: 'Brand identity', progress: 76, color: '#f3a57f', initials: 'SO' },
  { name: 'Field Notes website', detail: 'Web experience', progress: 48, color: '#bda6da', initials: 'FN' },
  { name: 'Everyday launch', detail: 'Campaign', progress: 32, color: '#bbe0b6', initials: 'ED' },
];
export function ActivityChart({ compact = false, period = '7d' }) {
  const gradientId = useId().replace(/:/g, '');
  const wave = period === '30d' ? 'M0 128 C42 80 59 105 96 121 S171 72 207 86 S263 97 297 54 S353 67 405 44 S482 60 530 19' : 'M0 122 C34 116 39 126 76 108 S134 112 164 94 S210 109 239 80 S298 91 332 65 S387 83 424 40 S487 56 530 15';
  const endY = period === '30d' ? 19 : 15;
  return <div className={`activity-chart ${compact ? 'chart-compact' : ''}`} aria-label="Illustrative project momentum line chart"><div className="chart-grid-lines"><span/><span/><span/><span/></div><svg viewBox="0 0 530 150" preserveAspectRatio="none" role="img" aria-label="Project activity increasing over the last weeks"><defs><linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#a6c77d" stopOpacity=".42"/><stop offset="100%" stopColor="#a6c77d" stopOpacity="0"/></linearGradient></defs><path d={`${wave} V150 H0 Z`} fill={`url(#${gradientId})`}/><path d={wave} fill="none" stroke="#648b4f" strokeWidth="3" strokeLinecap="round"/><circle cx="530" cy={endY} r="5" fill="#648b4f" stroke="#fff" strokeWidth="3"/></svg><div className="chart-labels"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div></div>;
}

export default function Mockup({ compact = false }) {
  return <div className={`mockup-window ${compact ? 'mockup-compact' : ''}`}>
    <div className="mockup-sidebar"><BrandMark small/><div className="mockup-sidebar-icons"><span className="selected"><LayoutGrid size={16}/></span><span><CalendarDays size={16}/></span><span><CircleCheck size={16}/></span><span><Ellipsis size={16}/></span></div><div className="mockup-user">A</div></div>
    <div className="mockup-content"><div className="mockup-topbar"><span className="mockup-crumb">Workspace <ChevronRight size={12}/> Overview</span><div className="mockup-top-actions"><div className="mockup-members"><b>J</b><b>M</b><b>A</b></div><span className="mockup-date"><CalendarDays size={12}/> Oct 2026</span></div></div>
      <div className="mockup-main"><div className="mockup-heading"><div><span className="mockup-eyebrow">MONDAY, OCTOBER 19</span><h3>Good morning, Alex <span>✳</span></h3><p>Here's what's happening across your studio.</p></div><span className="mockup-more"><MoreHorizontal size={17}/></span></div>
      <div className="mockup-stats"><div className="mockup-stat"><span>Active projects <ArrowUpRight size={13}/></span><strong>04</strong><small><i className="dot green"/> 2 on track</small></div><div className="mockup-stat"><span>Completed this week <ArrowUpRight size={13}/></span><strong>24</strong><small><TrendingUp size={12}/> +12% from last week</small></div><div className="mockup-stat"><span>Team capacity <ArrowUpRight size={13}/></span><strong>82<span>%</span></strong><small><i className="dot amber"/> A little room to breathe</small></div></div>
      <div className="mockup-lower"><div className="mockup-projects"><div className="mockup-panel-head"><strong>Moving along</strong><small>View all <ChevronRight size={12}/></small></div>{projects.map(p => <div key={p.name} className="mockup-project"><span className="mockup-project-icon" style={{background:p.color}}>{p.initials}</span><div className="mockup-project-copy"><strong>{p.name}</strong><small>{p.detail}</small></div><div className="mockup-progress"><div style={{width: `${p.progress}%`}}/></div><em>{p.progress}%</em></div>)}</div>
      <div className="mockup-momentum"><div className="mockup-panel-head"><strong>Momentum</strong><span className="mockup-period">This week <ChevronDown size={11}/></span></div><div className="mockup-chart-metric"><strong>+24.8%</strong><span><TrendingUp size={11}/> Healthy pace</span></div><ActivityChart compact/></div></div>
      </div>
    </div>
    {!compact && <Link to="/demo" className="mockup-open-link">Explore live dashboard <ArrowUpRight size={15}/></Link>}
  </div>;
}
