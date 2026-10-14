import { Link } from 'react-router-dom';

export function BrandMark({ small = false }) {
  return <span className={`brand-mark ${small ? 'brand-mark-small' : ''}`} aria-hidden="true"><svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4.5 21V7h4l5.5 7.3L19.5 7h4v14h-4.8v-7.5L14 19.4l-4.7-5.9V21H4.5Z" fill="currentColor"/></svg></span>;
}
export default function Brand({ light = false }) {
  return <Link to="/" className={`brand-link ${light ? 'brand-light' : ''}`} aria-label="Morrow home"><BrandMark/><span>morrow<span className="brand-period">.</span></span></Link>;
}
