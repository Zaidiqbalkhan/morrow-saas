import { Check, Info, X } from 'lucide-react';

export default function Toast({ toast, dismiss }) {
  if (!toast) return null;
  return <div role="status" aria-live="polite" className="toast"><span className="toast-icon">{toast.type === 'success' ? <Check size={16}/> : <Info size={16}/>}</span><div><strong>{toast.title}</strong>{toast.message && <p>{toast.message}</p>}</div><button type="button" onClick={dismiss} className="icon-button toast-close" aria-label="Dismiss message"><X size={16}/></button></div>;
}
