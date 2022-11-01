import './App.css';
import { ThemeProvider } from '@emotion/react';
import { Container, createTheme } from '@mui/material';
import AuthProvider from './contexts/auth/auth.provider';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const theme = createTheme();

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <Container component='main' maxWidth='xs'>
          <Routes />
        </Container>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
