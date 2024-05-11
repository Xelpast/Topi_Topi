import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/Router/AppRouter';
import { observer } from 'mobx-react';
import { Context } from './index';
import { useContext, useEffect, useState } from 'react';
import { check } from './http/userApi';
import Spinner from './components/Spinner/Spinner';
import { ToastContainer } from 'react-toastify';
import { fetchUser } from './http/userApi';
import 'react-toastify/dist/ReactToastify.css';

const App = observer(() => {
  const { userState } = useContext(Context);
  const [loading, setLoading] = useState(true);
  console.log(userState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await check();
        userState.setIsAuth(true);
        const userData = await fetchUser();
        userState.setUser(userData);
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
      <ToastContainer />
    </BrowserRouter>
  );
})

export default App;