import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import { Layout } from './layout';
import {
  Home,
  SobreNosotros,
  Error404,
  Rutas,
  RutasPath,
  RutasQueryString,
  ErrorPersonalizado
} from './pages';
import {
  Hooks,
  HooksEventoClick,
  HookUseState,
  HookOnchange,
  HookEventosVarios,
  HookCustom,
  HookuseLoaderData,
  HookuseNavigate,
  HookuseLocation
} from './hooks';
import { loader as LoadingCountrys } from './hooks/HookuseLoaderData';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPersonalizado />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/sobre-nosotros',
        element: <SobreNosotros />
      },
      {
        path: '*',
        element: <Error404 />
      },
      {
        path: '/rutas',
        element: <Rutas />
      },
      {
        path: '/rutas/path/:id',
        element: <RutasPath />
      },
      {
        path: '/rutas/query-string',
        element: <RutasQueryString />
      },
      {
        path: '/hooks',
        element: <Hooks />
      },
      {
        path: '/hooks/evento-click',
        element: <HooksEventoClick />
      },

      {
        path: '/hooks/hook-usestate',
        element: <HookUseState />
      },

      {
        path: '/hooks/hook-HookOnchange',
        element: <HookOnchange />
      },

      { path: '/hooks/hook-HookEventosVarios', element: <HookEventosVarios /> },

      {
        path: '/hooks/hook-HookCustom',
        element: <HookCustom />
      },
      {
        path: '/hooks/hook-useLoaderData',
        element: <HookuseLoaderData />,
        loader: LoadingCountrys
      },
      {
        path: '/hooks/hook-useNavigate',
        element: <HookuseNavigate />
      },
      {
        path: '/hooks/hook-useLocation',
        element: <HookuseLocation />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
