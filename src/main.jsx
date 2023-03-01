import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Provider para Redux

import { Provider } from 'react-redux';
import { store } from "./store/store"

// continuacion  codigo

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
  UtilesDay,
  ContextEjemplo,
  ReduxEjemplo
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

import {Utiles,Utilesswipeable} from './helpers';

import { loader as LoadingCountrys } from './hooks/HookuseLoaderData';
 import { action as procesarFormularioActionData   } from "./pages/FormularioUseActionData"
// import {element} from 'prop-types';



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
        element: <UtilesDay />
      },
      {
        path: '/utiles/Utilesswipeable',
        element : <Utilesswipeable />
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
        
        path:"/context",
        element:<ContextEjemplo />
        
        
      },
      
      
      {
         path :"redux",
         element :<ReduxEjemplo />
        
        
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
    {/* React redux */}
    <Provider store={store} >
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
