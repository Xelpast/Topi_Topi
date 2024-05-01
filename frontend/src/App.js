import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/Router/AppRouter';
import { observer } from 'mobx-react';
import { Context } from './index';
import { useContext, useEffect, useState } from 'react';
import { check } from './http/userApi';
import Spinner from './components/Spinner/Spinner';

const App = observer(() => {
  const { userState } = useContext(Context);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        await check();
        userState.setIsAuth(true);
      } catch (error) {
        userState.setIsAuth(false);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;