import { deviceContext } from '../context/DeviceContext';
import React, { useState, useEffect } from 'react';
import { publicRoutes } from './AllRoutes';
import { Route, Routes } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';

export const Index = () => {
    const isMobile = useIsMobile();

    return (
        <deviceContext.Provider value={{isMobile: isMobile}}>
            <Routes>
                <Route>
                    {publicRoutes.map((route, idx) => (
                        <Route
                            path={route.path}
                            element = {
                                <React.Fragment>
                                    {route.component}
                                </React.Fragment>
                            }
                            key={idx}
                            exact={true}
                        />
                    ))}
                </Route>
            </Routes>
        </deviceContext.Provider>
    )
}