import React from 'react'
import AuthProvider, { RequireAuth } from './privateroutes'
import { Route, Routes } from 'react-router-dom'
import { APP_ROUTES } from '../constants/appconstants'

const AppRoutes = () => {
    return (
        <AuthProvider>
            <Routes>
                {APP_ROUTES.map((item, index) => (
                    <Route key={`${item.path}_${index}`} path={item.path} element={item.protected ? (
                        <RequireAuth>
                            <item.children />
                        </RequireAuth>
                    ) :
                        <item.children />
                    } />
                ))}
            </Routes>
        </AuthProvider>
    )
}

export default AppRoutes