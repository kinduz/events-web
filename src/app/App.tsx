import React from 'react';
import { AppRouter } from './routing';
import { Providers } from './providers';

import './styles/App.css';

const App = () => (
  <Providers>
    <AppRouter />
  </Providers>
);

export default App;
