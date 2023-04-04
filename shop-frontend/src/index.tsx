/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';

import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';
import { Router } from '@solidjs/router';

const queryClient = new QueryClient();

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?'
  );
}

render(
  () => (
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  ),
  root!
);
