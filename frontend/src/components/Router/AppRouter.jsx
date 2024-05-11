import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from './routs';
import { Context } from '../../index';
import { observer } from 'mobx-react';
import AdminPage from '../../Pages/AdminPage';

const AppRouter = observer(() => {
    const { userState } = useContext(Context);
    const userRole = userState.user?.role;
    
    return (
        <Routes>
            {userState.isAuth && authRoutes.map(({ path, element }) =>
                <Route key={path} path={path} element={element} exact />
            )}
            {publicRoutes.map(({ path, element }) =>
                <Route key={path} path={path} element={element} exact />
            )}
            {userState.isAuth && userRole === 'ADMIN' && (
                <Route key="admin" path="/admin" element={<AdminPage />} exact />
            )}
            <Route path="*" element={<Navigate to="/error-404" />} />
        </Routes>
    );
});

export default AppRouter;
