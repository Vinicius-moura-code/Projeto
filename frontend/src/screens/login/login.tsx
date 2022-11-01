import React, { ChangeEvent, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import useAuth from '../../contexts/auth';
import { User } from './userType';
import { toast } from 'react-toastify';
var emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const Login: React.FC = () => {
  const { Login } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [infoLogin, setInfoLogin] = useState<User>({ email: '', senha: '' });
  const [errorLogin, setErrorLogin] = useState({
    emailError: '',
    senhaError: '',
  });

  const handleInputChange =
    (prop: keyof User) => (event: ChangeEvent<HTMLInputElement>) => {
      setInfoLogin({ ...infoLogin, [prop]: event.target.value });
      !emailRegex.test(infoLogin.email)
        ? setErrorLogin({ ...errorLogin, emailError: 'Email invalido!' })
        : setErrorLogin({ ...errorLogin, emailError: '' });
    };

  async function handleLogin(event: any) {
    setLoading(true);
    event.preventDefault();
    console.log(infoLogin);
    console.log();
    try {
      await Login({
        email: 'user@',
        password: '123456',
      });
      return toast.success('Sucesso', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
    } catch (error) {
      return toast.error('Ocorreu um erro', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <FaceOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Tela de Login
        </Typography>
        <Box component='form' onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email'
            name='email'
            autoFocus
            value={infoLogin.email}
            onChange={handleInputChange('email')}
            error={errorLogin.emailError !== ''}
            helperText={errorLogin.emailError}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Senha'
            type='password'
            id='password'
            value={infoLogin.senha}
            onChange={handleInputChange('senha')}
            error={errorLogin.senhaError !== ''}
            helperText={errorLogin.senhaError}
          />
          <FormControlLabel
            sx={{ width: '100%', mb: 2 }}
            control={<Checkbox value='remember' color='primary' />}
            label='Lembrar'
          />

          <LoadingButton
            sx={{ height: 40 }}
            size='small'
            onClick={handleLogin}
            loading={loading}
            fullWidth
            variant='contained'
            color='primary'
            loadingPosition='end'
            disabled={
              infoLogin.senha === '' ||
              infoLogin.senha === '' ||
              errorLogin.emailError !== ''
            }
          >
            Login
          </LoadingButton>
        </Box>
      </Box>
    </>
  );
};

export default Login;

//<button onClick={handleLogin}>Login</button>
