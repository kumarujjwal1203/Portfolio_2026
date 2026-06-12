'use client';

import { useEffect } from 'react';

export default function StartOnRefresh() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const navigation = performance.getEntriesByType('navigation')[0];
    const isReload = navigation?.type === 'reload' || performance.navigation?.type === 1;

    if (!isReload) return;

    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
  }, []);

  return null;
}
