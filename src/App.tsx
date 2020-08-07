import React from 'react';
// import Routes from './routes';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import { AuthProvider } from './hooks/AuthContext';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
