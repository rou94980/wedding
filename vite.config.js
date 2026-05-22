import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

function normalizeBasePath(value) {
  if (!value) {
    return '/';
  }

  let base = value.trim();

  if (base === '/') {
    return '/';
  }

  if (!base.startsWith('/')) {
    base = `/${base}`;
  }

  if (!base.endsWith('/')) {
    base = `${base}/`;
  }

  return base;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const fallbackBase = mode === 'production' ? '/wedding-invitation/' : '/';

  return {
    plugins: [react()],
    base: normalizeBasePath(env.VITE_BASE_PATH || fallbackBase),
  };
});

