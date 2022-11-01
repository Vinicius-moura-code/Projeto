import { Button } from '@mui/material';
import useAuth from '../../contexts/auth';

const Home: React.FC = () => {
  const { Logout } = useAuth();
  return (
    <div>
      <h1>Home</h1>
      <Button variant='contained' onClick={Logout}>
        Logout
      </Button>
    </div>
  );
};
export default Home;
