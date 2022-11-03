import { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import useToast from '../../hooks/useToast';
import { defaults, post } from '../../services/api';
import AuthContext from './auth.context';
import loginApi from './auth.service';

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<object | null>(null);
  const { logout, login, warning } = useToast();

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user');
    const storagedToken = sessionStorage.getItem('@App:token');

    if (
      storagedToken &&
      storagedToken !== undefined &&
      storagedUser &&
      storagedUser !== undefined
    ) {
      setUser(JSON.parse(storagedUser));
      defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function Login(userData: object) {
    try {
      const response = await loginApi({ ...userData, id: 0, role: '' });
      if (!(response.message === 'Usuário ou senha inválidos')) {
        await login();
        setUser(response.user);
        defaults.headers.Authorization = `Bearer ${response.token}`;

        sessionStorage.setItem('@App:user', JSON.stringify(response.user));
        sessionStorage.setItem('@App:token', response.token);
      } else {
        warning('Usuário ou senha inválidos');
      }
    } catch (err) {
      await Logout();
    }
  }

  async function Logout() {
    await logout();
    setUser(null);

    sessionStorage.removeItem('@App:user');
    sessionStorage.removeItem('@App:token');
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
