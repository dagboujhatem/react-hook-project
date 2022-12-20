import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './Context/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // run on the mounting of this component (Run only one)
  // component ifecycle: componentDidMount
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    // console.log(isLoggedIn);
    if(isLoggedIn === '1'){
      setIsLoggedIn(true)
    }
  }, [])
  

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
      <AuthContext.Provider value={{isLoggedIn: isLoggedIn}}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
  );
}

export default App;
