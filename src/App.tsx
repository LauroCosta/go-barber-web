import React from 'react';
// import Routes from './routes';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
