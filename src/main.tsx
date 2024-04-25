import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout/Layout.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

import './index.css'

import Vehicles from './pages/VehiclesPage/VehiclesPage.tsx'
import MapPage from './pages/MapPage.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Vehicles />
            },
            {
                path: '/map',
                element: <MapPage />
            },
            {
                path: '/test',
                element: <div>test</div>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>

    </React.StrictMode>,
)
