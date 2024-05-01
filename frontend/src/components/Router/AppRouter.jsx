import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from './routs';
import { Context } from '../../index';

export default function AppRouter() {
    const {userState} = useContext(Context);
    return (
        <Routes>
            {userState.isAuth && authRoutes.map(({ path, element }) => 
                <Route key={path} path={path} element={element} exact />
            )}
            {publicRoutes.map(({ path, element }) =>
                <Route key={path} path={path} element={element} exact />
            )}
            <Route path="*" element={<Navigate to="/error-404" />} />
        </Routes>
    );
}
