import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, defer, RouterProvider} from "react-router-dom";
import {Menu} from "./pages/Menu/Menu.tsx";
import {Cart} from "./pages/Cart/Cart.tsx";
import {Layout} from "./layout/Menu/Layout.tsx";
import {Product} from "./pages/Product/Product.tsx";
import axios from "axios";
import {PREFIX} from "./helpers/API.ts";
import {AuthLayout} from "./layout/Auth/Auth.layout.tsx";
import {Login} from "./pages/Login/Login.tsx";
import {Register} from "./pages/Register/Register.tsx";
import {RequireAuth} from "./helpers/RequireAuth.tsx";
import {store} from "./store/store.ts";
import {Provider} from "react-redux";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RequireAuth><Layout /></RequireAuth>,
        children: [
            {
                path: '/',
                element: <Menu />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/product/:id',
                element: <Product />,
                loader: async ({ params }) => {
                    return defer({
                        data: axios.get(`${PREFIX}/products/${params.id}`).then(data => data)
                    });
                }
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>,
)
