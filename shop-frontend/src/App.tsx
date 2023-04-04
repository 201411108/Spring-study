import type { Component } from 'solid-js';

import Layout from './components/layouts/Layout';
import { Route, Routes } from '@solidjs/router';
import Dashboard from './pages/Dashboard';
import { AxiosProvider } from './contexts/AxiosContext';

const App: Component = () => {
  return (
    <Layout>
      <AxiosProvider>
        <Routes>
          <Route path="/" component={Dashboard} />
        </Routes>
      </AxiosProvider>
    </Layout>
  );
};

export default App;
