import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from './routs';

export default function AppRouter() {
    const isAuth = true;
    return (
        <Routes>
            {isAuth && authRoutes.map(({ path, element }) => 
                <Route key={path} path={path} element={element} exact />
            )}
            {publicRoutes.map(({ path, element }) =>
                <Route key={path} path={path} element={element} exact />
            )}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}
