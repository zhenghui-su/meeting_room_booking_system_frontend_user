import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Register } from './page/register/Register';
import { UpdatePassword } from './page/update_password/UpdatePassword';
import { Login } from './page/login/Login';
import { ErrorPage } from './page/error/ErrorPage';
import '@ant-design/v5-patch-for-react-19';
import { Index } from './page/index';
import { UpdateInfo } from './page/update_info/UpdateInfo';
import { Menu } from './page/menu/Menu';
import { MeetingRoomList } from './page/meeting_room_list/MeetingRoomList';
import { BookingHistory } from './page/booking_history/BookingHistory';

const routes = [
	{
		path: '/',
		element: <Index></Index>,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'update_info',
				element: <UpdateInfo />,
			},
			{
				path: '/',
				element: <Menu />,
				children: [
					{
						path: '/',
						element: <MeetingRoomList />,
					},
					{
						path: 'meeting_room_list',
						element: <MeetingRoomList />,
					},
					{
						path: 'booking_history',
						element: <BookingHistory />,
					},
				],
			},
		],
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
export const router = createBrowserRouter(routes);

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);
