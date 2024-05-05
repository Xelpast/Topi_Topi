import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from './routs';
import { Context } from '../../index';
import { observer } from 'mobx-react';

const AppRouter = observer(()=> {
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
});

export default AppRouter;
