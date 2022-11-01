import { useState, useEffect } from 'react';
import { defaults, post } from '../../services/api';
import AuthContext from './auth.context';

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user');
    const storagedToken = sessionStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function Login(userData: object) {
    const response = await post('https://localhost:3000', userData);

    setUser(response.data.user);
    defaults.headers.Authorization = `Bearer ${response.data.token}`;

    sessionStorage.setItem('@App:user', JSON.stringify(response.data.user));
    sessionStorage.setItem('@App:token', response.data.token);
  }

  function Logout() {
    setUser(null);

    sessionStorage.removeItem('@App:user');
    sessionStorage.removeItem('App:token');
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
