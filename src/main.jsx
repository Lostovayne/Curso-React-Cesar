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
  ErrorPersonalizado,
  Formularios,
  FormularioSimple,
  FormularioUseActionData,
  UtilesDay
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
  HookuseLocation,
  HookuseRef
} from './hooks';
import Utiles from './helpers/Utiles';



import { loader as LoadingCountrys } from './hooks/HookuseLoaderData';
 import { action as procesarFormularioActionData   } from "./pages/FormularioUseActionData"


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
        path: '/utiles',
        element: <Utiles />
      },
      {
        path: '/utiles/UtilesDay',
        element : <UtilesDay />
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
        path: '/formularios',
        element: <Formularios />
      },

      {
        path: '/formularios/simple',
        element: <FormularioSimple />
      },
      {
        path: '/formularios/use-action-data',
        element: <FormularioUseActionData />,
        action: procesarFormularioActionData
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
      },
      {
        path: '/hooks/hook-useRef',
        element: <HookuseRef />
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
