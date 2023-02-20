import {Link} from 'react-router-dom'

const Hooks = () => {
  return (
    <>
      <h2>Listado de Hooks</h2>
      <ul>
        <li>
          <Link to='/hooks/evento-click'>Evento Click</Link>
        </li>
        <li>
          <Link to='/hooks/hook-usestate'>Hook useState</Link>
        </li>
        <li>
          <Link to='/hooks/hook-HookOnchange'>HookOnchange</Link>
        </li>
        <li>
          <Link to='/hooks/hook-HookEventosVarios'>HookEventosVarios</Link>
        </li>
        <li>
          <Link to='/hooks/hook-HookCustom'>HookCustom</Link>
        </li>
        <li>
          <Link to='/hooks/hook-useLoaderData'> useLoaderData </Link>
        </li>
        <li>
          <Link to='/hooks/hook-useNavigate'> UseNavigate </Link>
        </li>
        <li>
          <Link to='/hooks/hook-useLocation'>useLocation</Link>
        </li>
      </ul>
    </>
  );
}
export default Hooks