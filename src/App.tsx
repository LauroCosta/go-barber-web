import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import Routes from './routes';

import SignIn from './pages/SignIn';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
