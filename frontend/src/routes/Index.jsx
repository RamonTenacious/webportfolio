import { deviceContext } from '../context/DeviceContext';
import React from 'react';
import { publicRoutes } from './AllRoutes';
import { Route, Routes } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';

export const Index = () => {
    const isMobile = useIsMobile();

    return (
        <deviceContext.Provider value={{ isMobile }}>
            <Routes>
                {publicRoutes.map((route, idx) => (
                    <Route
                        key={idx}
                        path={route.path}
                        element={route.component}
                    />
                ))}
            </Routes>
        </deviceContext.Provider>
    );
};