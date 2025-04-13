import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Register } from './page/register/Register';
import { UpdatePassword } from './page/update_password/UpdatePassword';
import { Login } from './page/login/Login';
import { ErrorPage } from './page/error/ErrorPage';
import '@ant-design/v5-patch-for-react-19';

const routes = [
	{
		path: '/',
		element: <div>index</div>,
		errorElement: <ErrorPage />,
	},
	{
		path: 'login',
		element: <Login />,
	},
	{
		path: 'register',
		element: <Register />,
	},
	{
		path: 'update_password',
		element: <UpdatePassword />,
	},
];
const router = createBrowserRouter(routes);

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);
