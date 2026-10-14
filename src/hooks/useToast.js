import { useEffect, useState } from 'react';
export default function useToast() {
  const [toast, setToast] = useState(null);
  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 4200);
    return () => window.clearTimeout(timer);
  }, [toast]);
  const notify = (title, message = '', type = 'info') => setToast({ id: Date.now(), title, message, type });
  return { toast, notify, dismiss: () => setToast(null) };
}
