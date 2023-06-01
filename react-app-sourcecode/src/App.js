import './App.css';
import React, { useState } from 'react';
import Header  from './Header';
import Main  from './Main';
import Login  from './Login';

const WelcomeScreen = () => {
  return (
    <div>
      <Header title="Welcome Manager" />
      <Main />
    </div>
  );
};

const App = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <>
      {loginStatus ? <WelcomeScreen />: <> <Header title="Login" /> <Login setLoginStatus={setLoginStatus} /> </>}
    </>
  );
};

export default App;
